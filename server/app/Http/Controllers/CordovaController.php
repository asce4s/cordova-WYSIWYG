<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Process\Process;

class CordovaController extends Controller
{
    public function build(Request $req){
        $process = new Process('cordova create myapp');
        $process->run(function ($type, $buffer) {
            echo $buffer;
        });
    }

    public function createNew(Request $req){
        $id="build".$req->get('id');

        //print_r(json_encode(array("id"=>$id)));

        $res=array();
        $process = new Process('cd projects && cordova create '.$id);
        $process->run();
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

        Storage::disk('uploads')->deleteDirectory('projects/'.$id);
    }

}
