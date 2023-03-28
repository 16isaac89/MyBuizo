<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use Inertia\Inertia;
use App\Models\Permission;
use App\Http\Requests\RoleCreateRequest;
use App\Http\Requests\UpdateRoleRequest;

class RolesController extends Controller
{
    public function index(){
        $roles = Role::with('permissions')->get();
        return Inertia::render('Admin/roles/index',[
            'roles'=>$roles
        ]);
    }
    public function create(){
        $permissions = Permission::all();
        return Inertia::render('Admin/roles/create',[
            'permissions'=>$permissions
        ]);
    }
    public function store(RoleCreateRequest $request){
        $role = Role::create($request->all());
        $permissions = array();
        foreach($request->permissions as $permission){
            array_push($permissions,$permission['value']);
        }
        $role->permissions()->sync($permissions);

        return redirect()->route('roles.index');
    }

    public function edit(Role $role)
    {
        //abort_if(Gate::denies('role_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $permissions = Permission::all();

        $role->load('permissions');

        return Inertia::render('Admin/roles/edit',[
        'permissions'=>$permissions,
        'role'=>$role,
        ]);
    }

    public function update(UpdateRoleRequest $request,Role $role){
        $role->update($request->all());
        $permissions = array();
        foreach($request->permissions as $permission){
            array_push($permissions,$permission['value']);
        }
        $role->permissions()->sync($permissions);

        return redirect()->route('roles.index');
    }

}
