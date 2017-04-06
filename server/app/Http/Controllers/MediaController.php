<?php

namespace App\Http\Controllers;

use Faker\Provider\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;


class MediaController extends Controller
{
    private $storage;

    function __construct()
    {
        $this->storage=Storage::disk('uploads');

    }

    public function upload(Request $request){
        $appID='build'.$request->get("appID");
        $uploadPath='projects'.DIRECTORY_SEPARATOR.$appID.DIRECTORY_SEPARATOR."www".DIRECTORY_SEPARATOR.'img';
        $path = $this->storage->put($uploadPath,$request->file('file'));

        return json_encode(array('path'=>$path));
    }

    public function getAll(Request $request){
        $appID='build'.$request->get("appID");
        $directory=DIRECTORY_SEPARATOR.'projects'.DIRECTORY_SEPARATOR.$appID.DIRECTORY_SEPARATOR."www".DIRECTORY_SEPARATOR.'img';
        $files = $this->storage->allFiles($directory);

        return json_encode(array(
            'baseURL'=>URL::to('/'),
            'images'=>$files
        ));


    }
}
