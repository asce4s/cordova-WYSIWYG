<?php

namespace App\Http\Controllers;

use Chumper\Zipper\Facades\Zipper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Process\Process;

class CordovaController extends Controller
{
    public function preview(Request $req){

        //print_r(json_encode(array("ss"=>$req->get('scripts'))));

        $id = "build" . $req->get('id');
        $design = json_decode($req->get('design'));

        $pages = json_decode($req->get('pages'));

        $styles = $req->get('styles');
        $scripts = $req->get('scripts');

        $scripts= preg_replace("[\{0\}]","+",$scripts);

       // $scripts = urlencode($scripts);
        //$scripts = str_replace("+", "%2B",$scripts);
        //$scripts = urldecode($scripts);


        $storage = Storage::disk('uploads');
        $path = 'projects/' . $id . "/www/";

       // $storage->deleteDirectory('projects/' . $id . '/platforms/browser');

        $storage->put($path . 'css/style.css', $styles);
        $storage->put($path . 'js/custom.js',$this->scriptTemplate($scripts));

        if (!$storage->has($path . 'css/onsen-css-components.css'))
            $storage->copy('assets/onsen-css-components.css', $path . 'css/onsen-css-components.css');
        if (!$storage->has($path . 'css/ionicons/css/ionicons.min.css'))
            $storage->copy('assets/ionicons/css/ionicons.min.css', $path . 'css/ionicons/css/ionicons.min.css');
        if (!$storage->has($path . 'css/ionicons/fonts/ionicons.eot'))
            $storage->copy('assets/ionicons/fonts/ionicons.eot', $path . 'css/ionicons/fonts/ionicons.eot');
        if (!$storage->has($path . 'css/ionicons/fonts/ionicons.svg'))
            $storage->copy('assets/ionicons/fonts/ionicons.svg', $path . 'css/ionicons/fonts/ionicons.svg');
        if (!$storage->has($path . 'css/ionicons/fonts/ionicons.ttf'))
            $storage->copy('assets/ionicons/fonts/ionicons.ttf', $path . 'css/ionicons/fonts/ionicons.ttf');
        if (!$storage->has($path . 'css/ionicons/fonts/ionicons.woff'))
            $storage->copy('assets/ionicons/fonts/ionicons.woff', $path . 'css/ionicons/fonts/ionicons.woff');

        if (!$storage->has($path . 'js/jquery-3.2.1.min.js'))
            $storage->copy('assets/jquery-3.2.1.min.js', $path . 'js/jquery-3.2.1.min.js');

        foreach ($pages as $key => $val) {
            if ($val->home) {
                $storage->put($path . "index.html", $this->basicTemplate($design[$key]));
            } else {
                $storage->put($path . $val->id . ".html", $this->basicTemplate($design[$key]));
            }
        }




        $process = new Process('cd projects/' . $id . ' && cordova platform add browser');
        $process->run();

        print_r(json_encode(array(
            'url' => 'http://localhost:8000/projects/' . $id . '/platforms/browser/www/index.html'
        )));
    }

    public function build(Request $req)
    {

        $id = "build" . $req->get('id');
        $design = json_decode($req->get('design'));

        $pages = json_decode($req->get('pages'));

        $styles = $req->get('styles');
        $scripts = $req->get('scripts');
        $storage = Storage::disk('uploads');
        $path = 'projects/' . $id . "/www/";


        $storage->put($path . 'css/style.css', $styles);
        $storage->put($path . 'js/index.js', $this->scriptTemplate($scripts));

        if (!$storage->has($path . 'css/onsen-css-components.css'))
            $storage->copy('assets/onsen-css-components.css', $path . 'css/onsen-css-components.css');
        if (!$storage->has($path . 'css/ionicons/css/ionicons.min.css'))
            $storage->copy('assets/ionicons/css/ionicons.min.css', $path . 'css/ionicons/css/ionicons.min.css');
        if (!$storage->has($path . 'css/ionicons/fonts/ionicons.eot'))
            $storage->copy('assets/ionicons/fonts/ionicons.eot', $path . 'css/ionicons/fonts/ionicons.eot');
        if (!$storage->has($path . 'css/ionicons/fonts/ionicons.svg'))
            $storage->copy('assets/ionicons/fonts/ionicons.svg', $path . 'css/ionicons/fonts/ionicons.svg');
        if (!$storage->has($path . 'css/ionicons/fonts/ionicons.ttf'))
            $storage->copy('assets/ionicons/fonts/ionicons.ttf', $path . 'css/ionicons/fonts/ionicons.ttf');
        if (!$storage->has($path . 'css/ionicons/fonts/ionicons.woff'))
            $storage->copy('assets/ionicons/fonts/ionicons.woff', $path . 'css/ionicons/fonts/ionicons.woff');

        if (!$storage->has($path . 'js/jquery-3.2.1.min.js'))
            $storage->copy('assets/jquery-3.2.1.min.js', $path . 'js/jquery-3.2.1.min.js');

        foreach ($pages as $key => $val) {
            if ($val->home) {
                $storage->put($path . "index.html", $this->basicTemplate($design[$key]));
            } else {
                $storage->put($path . $val->id . ".html", $this->basicTemplate($design[$key]));
            }
        }


        $process = new Process('cd projects/' . $id . ' && cordova platform add android && cordova build android && cordova platform add browser && cordova build browser ');
        $process->run();


        $files = glob(public_path('projects/' . $id . '/'));

        Zipper::make('projects/' . $id . '/' . $id . '.zip')->add($files);

        print_r(json_encode(array(
            'web' => 'http://localhost:8000/projects/' . $id . '/platforms/browser/build/package.zip',
            'android' => 'http://localhost:8000/projects/' . $id . 'platforms/android/build/outputs/apk/android-debug.apk',
            'project' => 'http://localhost:8000/projects/' . $id . '/' . $id . '.zip'
        )));
    }

    public function test()
    {
        $files = glob(public_path('projects/build-KhfJRnenSq5D4mbSXQB/'));

        Zipper::make('mytest.zip')->add($files);


        return public_path('mytest.zip');
    }

    public function createNew(Request $req)
    {
        $id = "build" . $req->get('id');

        //print_r(json_encode(array("id"=>$id)));

        $res = array();
        $process = new Process('cd projects && cordova create ' . $id);
        print_r($process->run());
        /*$process->run(function ($type, $buffer) {
            if (Process::ERR === $type) {
                $res["error"]="true";
            } else {
                $res["error"]="false";
            }

        });*/

        print_r(json_encode($res));

    }

    public function delete(Request $req)
    {
        $id = "build" . $req->get('id');

        Storage::disk('uploads')->deleteDirectory('projects/' . $id);
    }


    private function basicTemplate($content)
    {
        return '
        <!DOCTYPE html>

        <html>
        <head>
            <meta http-equiv="Content-Security-Policy" content="default-src \'self\' data: gap: https://ssl.gstatic.com \'unsafe-eval\'; style-src \'self\' \'unsafe-inline\'; media-src *; img-src \'self\' data: content:;">
            <meta name="format-detection" content="telephone=no">
            <meta name="msapplication-tap-highlight" content="no">
            <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
           <link rel="stylesheet" type="text/css" href="./css/onsen-css-components.css">
           <link href="./css/ionicons/css/ionicons.min.css"  rel="stylesheet">
            <link rel="stylesheet" type="text/css" href="./css/style.css">
            <title></title>
        </head>
        <body>
        <div class="app">
            <div id="deviceready" class="blink">' .

            $content

            . '</div>
        </div>
        <script type="text/javascript" src="cordova.js"></script>
       <script src="js/jquery-3.2.1.min.js"></script>

        <script type="text/javascript" src="js/custom.js"></script>
        </body>
        </html>';


    }

    private function scriptTemplate($scripts)
    {
        return "
        var app = {
            // Application Constructor
            initialize: function() {
                document.addEventListener(\"deviceready\", this.onDeviceReady.bind(this), false);
            },

            // deviceready Event Handler
            //
            // Bind any cordova events here. Common events are:
            // \"pause\", \"resume\", etc.
            onDeviceReady: function() {
                ".$scripts."
            },


        };

        app.initialize();";
    }

}
