<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function create(User $user): bool
    {
        return $user->email === 'ian@inert.lan';
    }

    public function edit(User $user, User $model): bool
    {
        return (bool)mt_rand(0, 1);
    }
}
