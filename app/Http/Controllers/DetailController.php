<?php

namespace App\Http\Controllers;
use App\Models\Detail;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;


class DetailController extends Controller
{

    public function store(Request $request)
    {
        // Validate the request data
        $validated = $request->validate([
            'email' => 'required|email|unique:details,email',
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
        ]);

        // Create a new Detail record
        $detail = new Detail();
        $detail->email = $validated['email'];
        $detail->password = Hash::make($validated['password']);
        $detail->confirm_password = Hash::make($validated['confirm_password']); 
        $detail->save();

        return response()->json([
            'message' => 'Detail created successfully!',
            'data' => $detail
        ], 201);
    }

    // Method to retrieve all records from the details table
    public function index()
    {
        $details = Detail::all();
        return response()->json($details, 200);
    }

    // Method to retrieve a single record by ID
    public function show($id)
    {
        $detail = Detail::findOrFail($id);
        
        if (!$detail) {
            return response()->json(['message' => 'Detail not found'], 404);
        }

        return response()->json($detail);
    }
    
}
