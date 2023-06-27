<?php

namespace App\Http\Controllers\Services;

use Illuminate\Http\Request;

class ImageService
{
    public function storeMedia($requestimage)
    {
        // Validates file size
        if ($requestimage->has('size')) {
            $this->validate($requestimage, [
                'file' => 'max:' . $requestimage->input('size') * 1024,
            ]);
        }
        // If width or height is preset - we are validating it as an image
        if ($requestimage->has('width') || $requestimage->has('height')) {
            $this->validate($requestimage, [
                'file' => sprintf(
                    'image|dimensions:max_width=%s,max_height=%s',
                    $requestimage->input('width', 100000),
                    $requestimage->input('height', 100000)
                ),
            ]);
        }

        $path = storage_path('tmp/uploads');

        try {
            if (!file_exists($path)) {
                mkdir($path, 0755, true);
            }
        } catch (\Exception $e) {
        }

        $file = $requestimage->file('imageresource');

        $name = uniqid() . '_' . trim($file->getClientOriginalName());

        $file->move($path, $name);

        return (Object)[
            'name'          => $name,
            'original_name' => $file->getClientOriginalName(),
        ];
    }
}
