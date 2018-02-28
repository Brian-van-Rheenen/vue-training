<!DOCTYPE html>
<html>
<head>
    <title>My App</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css">
</head>
<body>
    <div id="app">
        @include ('layouts.header')

        <section class="section">
            <div class="container">
                <router-view></router-view>
            </div>
        </section>
    </div>

    <script src="{{ mix('js/master.js') }}"></script>
</body>
</html>