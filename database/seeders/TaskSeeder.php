<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Todo;



class TaskSeeder extends Seeder
{
    
    public function run()
    {
       
        for($i=0;$i<5;$i++){
            Todo::create([
                'task' => "front end backend connectivity $i",
               
            ]);
        }
    }
} 

?>
