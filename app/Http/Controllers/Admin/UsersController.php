<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Role;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\StoreUserRequest;

class UsersController extends Controller
{
    public function index(){
        $users = User::with('roles')->get();
       return Inertia::render('Admin/users/index',[
            'users'=>$users
        ]);
    }


    public function create(){
        $roles = Role::all();

        return Inertia::render('Admin/users/create',[
            'roles'=>$roles,

        ]);
    }
    public function store(StoreuserRequest $request){
        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
        ]);
        $roles = array();
        foreach($request->roles as $role){
            array_push($roles,$role['value']);
        }
        $role->roles()->sync($role);
        return redirect()->route('users.index');
    }

    public function edit(User $user){
        $roles = Role::all();
        $user->load('roles');
        return Inertia::render('Admin/users/edit',[
            'user'=>$user,
            'roles'=>$roles
        ]);
    }
    public function update(UpdateUserRequest $request, User $user){
        
        $user->update($request->all());
        $roles = array();
        foreach($request->roles as $role){
            array_push($roles,$role['value']);
        }
        $user->roles()->sync($roles);
        return redirect()->route('users.index');
    }
    public function destroy(User $user)
    {
        //abort_if(Gate::denies('user_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $user->delete();

        return redirect()->route('users.index');
    }
}
