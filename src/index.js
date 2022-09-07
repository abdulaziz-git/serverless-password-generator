/**
 * Serverless password generator using cloudflare workers
 *
 * created by : Abdul Aziz
 * github : https://github.com/abdulaziz-git
 * source : https://github.com/abdulaziz-git/serverless-password-generator
 *
 */

import * as generator from 'generate-password-browser';
import zxcvbn from 'zxcvbn';
import index from '../html/index'

async function generate(u, l, n, s, length = 14){
	// For generating multiple password at once
	// const password = generator.generateMultiple(3, {
	// 	length: 15,
	// 	numbers: true,
	// 	symbols: true,
	// 	// strict: true
	// });

	const password = generator.generate({
		length: length,
		uppercase: u,
		lowercase: l,
		numbers: n,
		symbols: s,
		// strict: true
	});
	return password;
}

async function passStr(password) {
  const password_strength = zxcvbn(password);

//   console.log(password_strength.score);
  return password_strength;
}

async function handleRequest(request) {
  const { pathname } = new URL(request.url);

//  if (pathname.startsWith("/password-generator")) {
// 	const password = await generate();
// 	const password_strength = await passStr(password);
// 	const result = {
// 		password: password,
// 		score: password_strength.score,
// 		estimate_time_to_crack: password_strength.crack_times_display.offline_slow_hashing_1e4_per_second,

// 	};
// 	return new Response(JSON.stringify(password_strength));
//   }

//   if (pathname.startsWith("/password-strength")) {
// 	const password_strength = await passStr();
// 	return new Response(JSON.stringify(password_strength));
//   }

  if (pathname.startsWith("/favicon.ico")) return new Response("");

  if (request.method === "POST" && pathname.startsWith("/generate")) {
    const formData = await request.formData();
    let u, l, n, s = false;
    let length = 10;
    if (formData.has("password_length")) length = formData.get("password_length");
    if (formData.has("uppercase")) u = true;
    if (formData.has("lowercase")) l = true;
    if (formData.has("numbers")) n = true;
    if (formData.has("symbols")) s = true;

    const password = await generate(u, l, n, s, length);

	const password_strength = await passStr(password);
	const result = {
		password: password,
		score: password_strength.score,
		estimate: password_strength.crack_times_display.offline_slow_hashing_1e4_per_second,
	}
    return new Response(JSON.stringify(result));
  }

  const password = await generate(true, true, true, false);
  const password_strength = await passStr(password);
  const result = {
    password: password,
    score: password_strength.score,
    estimate:
      password_strength.crack_times_display.offline_slow_hashing_1e4_per_second,
  };

  return new Response(index(JSON.stringify(result)), {
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    },
  });
}

addEventListener('fetch', event => {
	return event.respondWith(handleRequest(event.request));
})
