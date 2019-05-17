<?php

namespace App\Http\Middleware;

use Closure;
use http\Env\Response;

class DenyAccessIp
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $array = config('app.ipDeny');
        $ip = request()->ip();
        //return dd($ip);
        if (in_array($ip, $array)){
            $message = 'Access DENIED!';
            return Response()->view('error', compact('message'));
            return view('error', compact('message'));
        }
        return $next($request);

    }
}
