<?php

use CodeFin\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 1)->states('admin')->create([

            'name' => 'Leo Fontolan',
            'email' => 'admin@user.com'
        ]);

        factory(User::class,1)->create([

            'name' => 'Cliente',
            'email' => 'client@user.com'
        ]);
    }
}
