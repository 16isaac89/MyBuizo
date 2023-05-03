<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'sidebarpermissions'=>function()use($request){
                $permissions = array();
                if($request->user()){
                $roles = $request->user()->roles->load('permissions');
            
               foreach($roles as $role){
                foreach($role->permissions as $permission){
                 str_contains($permission->title, '_access') &&  array_push($permissions,$permission->title);
                   
                }

               }
            }
                return $permissions;
            }
        ]);
    }
}
