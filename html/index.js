const index = (data) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Generate secure, strong, and random passwords to maintain security and privacy online with Blogdoang password generator."/>
    <meta name="keywords" content="strong password, new password, create new password, random password, random, generate new password"/>
    <meta name="og:title" content="Strong Password Generator | Blogdoang"/>
    <meta name="og:description" content="Generate secure, strong, and random passwords to maintain security and privacy online with Blogdoang password generator."/>
    <meta name="og:image" content=""/>
    <meta name="og:site_name" content="Blogdoang Password Generator"/>
    <meta name="og:url" content="https://password-generator.blogdoang.com/"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@bitwarden"/>
    <meta name="author" content="Abdul Aziz, Blogdoang.com">
    <title>Strong Password Generator | Blogdoang</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.10/dist/clipboard.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <style>
        .container-sm {max-width: 600px;}.bd-placeholder-img {font-size: 1.125rem;text-anchor: middle;-webkit-user-select: none;-moz-user-select: none;user-select: none;}@media (min-width: 768px) {.bd-placeholder-img-lg {font-size: 3.5rem;}}.b-example-divider {height: 3rem;background-color: rgba(0, 0, 0, .1);border: solid rgba(0, 0, 0, .15);border-width: 1px 0;box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);}.b-example-vr {flex-shrink: 0;width: 1.5rem;height: 100vh;}.bi {vertical-align: -.125em;fill: currentColor;}.nav-scroller {position: relative;z-index: 2;height: 2.75rem;overflow-y: hidden;}.nav-scroller .nav {display: flex;flex-wrap: nowrap;padding-bottom: 1rem;margin-top: -1px;overflow-x: auto;text-align: center;white-space: nowrap;-webkit-overflow-scrolling: touch;}.bd-clipboard {position: relative;float: right;display: block;}.btn-clipboard {position: relative;z-index: 2;border: none;margin-top: 0.75rem;margin-right: 0.75rem;}#generated-result {word-wrap: break-word;font-weight: 700;text-align: center;font-size: 1.5rem;background: #ecf0f5;border-radius: 0.375rem;position: relative;display: block;}
    </style>
  </head>
  <body class="bg-light">
    <div class="container-sm">
        <main>
            <div class="py-5 text-center">
                <h2>Password Generator</h2>
                <p class="lead">Need a password? Try the Our Strong Password Generator.<br/>Generate secure, random passwords to stay safe online.</p>
            </div>
            <div class="row g-5">
            <div class="col">
                <form class="needs-validation" novalidate>
                    <div class="col-12">
                        <div class="bd-clipboard">
                            <button type="button" class="btn-clipboard" data-clipboard-target="#generated-result">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="clipboard-icon" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>
                            </button>
                        </div>
                        <div class="col-12 p-3" id="generated-result"></div>
                    </div>
                    <div class="row g-3 my-1">
                        <div class="col-sm-6">
                            <h5 class="mb-2">Password's score:</h5>
                            <h5 id="score">strong</h5>
                        </div>
                        <div class="col-sm-6">
                            <h5 class="mb-2">Est. time to crack:</h5>
                            <h5 id="estimate" style="color:rgb(23, 93, 220);">centuries</h5>
                        </div>
                    </div>
                    <hr class="my-4">
                    <h4 class="mb-3">Password Length</h4>
                    <div class="row g-3">
                        <div class="col-sm-12">
                            <input type="hidden" name="password_length" id="password-length" value="">
                            <div class="row align-items-center">
                                <div class="col order-2">
                                    Num: <span id="range"></span>
                                </div>
                                <div class="col-sm-10 order-1">
                                    <input type="range" class="form-range" value="14" min="5" max="128" id="passwordlength">
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="my-4">
                    <h4 class="mb-3">Password Options</h4>
                    <div class="row g-3">
                        <div class="col-sm-6">
                            <div class="form-check form-switch my-3">
                                <input class="form-check-input" type="checkbox" role="switch" name="uppercase" id="uppercase" checked>
                                <label class="form-check-label" for="uppercase">Include UPPERCASE letters</label>
                            </div>
                            <div class="form-check form-switch my-3">
                                <input class="form-check-input" type="checkbox" role="switch" name="lowercase" id="lowercase" checked>
                                <label class="form-check-label" for="lowercase">Include lowercase letters</label>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-check form-switch my-3">
                                <input class="form-check-input" type="checkbox" role="switch" name="numbers" id="numbers" checked>
                                <label class="form-check-label" for="numbers">Include numbers</label>
                            </div>
                            <div class="form-check form-switch my-3">
                                <input class="form-check-input" type="checkbox" role="switch" name="symbols" id="symbols">
                                <label class="form-check-label" for="symbols">Include symbols</label>
                            </div>
                        </div>
                    </div>
                    <hr class="my-4">
                    <button class="w-100 btn btn-primary btn-lg" type="submit">Generate Password</button>
                </form>
            </div>
            </div>
        </main>
        <footer class="my-4 pt-2 text-muted text-center text-small">
            <ul class="list-inline">
                <li class="list-inline-item">
                    &copy; 2022 <a href="https://blogdoang.com/" target="_blank">The Blogdoang</a>
                </li>
                <li class="list-inline-item">
                    <a href="https://github.com/abdulaziz-git" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 480 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="https://www.linkedin.com/in/abdulaziz-id/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="https://www.cloudflare.com/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M407.906,319.913l-230.8-2.928a4.58,4.58,0,0,1-3.632-1.926,4.648,4.648,0,0,1-.494-4.147,6.143,6.143,0,0,1,5.361-4.076L411.281,303.9c27.631-1.26,57.546-23.574,68.022-50.784l13.286-34.542a7.944,7.944,0,0,0,.524-2.936,7.735,7.735,0,0,0-.164-1.631A151.91,151.91,0,0,0,201.257,198.4,68.12,68.12,0,0,0,94.2,269.59C41.924,271.106,0,313.728,0,366.12a96.054,96.054,0,0,0,1.029,13.958,4.508,4.508,0,0,0,4.445,3.871l426.1.051c.043,0,.08-.019.122-.02a5.606,5.606,0,0,0,5.271-4l3.273-11.265c3.9-13.4,2.448-25.8-4.1-34.9C430.124,325.423,420.09,320.487,407.906,319.913ZM513.856,221.1c-2.141,0-4.271.062-6.391.164a3.771,3.771,0,0,0-3.324,2.653l-9.077,31.193c-3.9,13.4-2.449,25.786,4.1,34.89,6.02,8.4,16.054,13.323,28.238,13.9l49.2,2.939a4.491,4.491,0,0,1,3.51,1.894,4.64,4.64,0,0,1,.514,4.169,6.153,6.153,0,0,1-5.351,4.075l-51.125,2.939c-27.754,1.27-57.669,23.574-68.145,50.784l-3.695,9.606a2.716,2.716,0,0,0,2.427,3.68c.046,0,.088.017.136.017h175.91a4.69,4.69,0,0,0,4.539-3.37,124.807,124.807,0,0,0,4.682-34C640,277.3,583.524,221.1,513.856,221.1Z"/></svg>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="https://github.com/abdulaziz-git/serverless-password-generator" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="https://getbootstrap.com/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg>
                    </a>
                </li>
            </ul>
        </footer>
        <div class="toast-container position-fixed top-0 end-0 p-3">
            <div id="toast-error" class="toast text-bg-danger" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">
                        Please select at least one password options.
                    </div>
                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function () {
            $("form").submit(function(event){
                let data = $(this).serialize();
                $.ajax({
                    type: "POST",
                    url: "/generate",
                    data: data,
                    success: function(result){
                        let json = JSON.parse(result);
                        $("#generated-result").html(mapPassword(json.password));
                        $("#score").html(getScore(json.score)[0]);
                        $("#score").css("color", getScore(json.score)[1]);
                        $("#estimate").html(json.estimate);
                    }
                })
                event.preventDefault();
            })
            $('input:checkbox').change(function(){
                if($('input:checked').length > 0){
                    $("form").submit();
                } else {
                    const toastE = $('#toast-error').get(0);
                    const toast = new bootstrap.Toast(toastE);
                    toast.show();
                }
            });
            let clipboard = new ClipboardJS('.btn-clipboard');
            clipboard.on('success', function(e) {
                const svg = $('.btn-clipboard').get(0);
                const curSVG = svg.innerHTML;
                svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check-fill" viewBox="0 0 16 16"><path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/></svg>'
                setTimeout(function(){
                    svg.innerHTML = curSVG;
                }, 3000)
            });
            function getColorByCharType(character) {
                if (!Number.isNaN(character * 1)) {
                return '#007fde'
                }
                if (character.match(/[a-z]/i)) {
                return '#212529'
                }
                return '#c40800'
            }
            function mapPassword(password){
                let data = password.split('');
                let result = data.map(function (char) {
                    return '<span style="color:'+getColorByCharType(char)+'">' + char + '</span>';
                }).join('');
                return result;
            }
            function getScore(score){
                if(score < 2) return ["very weak", "#dc3545"];
                if(score < 3) return ["weak", "#ffc107"];
                if(score < 4) return ["good", "#17a2b8"];
                return ["very good", "#175ddc"];
            }
            let json = JSON.parse('${data}');
            $("#generated-result").html(mapPassword(json.password));
            $("#score").html(getScore(json.score)[0]);
            $("#score").css("color", getScore(json.score)[1]);
            $("#estimate").html(json.estimate);
            let slider = $("#passwordlength").get(0);
            $("#range").html(slider.value);
            $("#password-length").val(slider.value)
            slider.addEventListener("input", ()=>{
                let sValue = slider.value;
                $("#range").html(sValue);
                $("#password-length").val(sValue);
                // console.log(sValue);
                $("form").submit();
            })
        })
    </script>
  </body>
</html>
`;

export default index