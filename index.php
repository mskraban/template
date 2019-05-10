<!DOCTYPE html>
<html lang="sl">
<head>
    <title>Page Title</title>
    <link rel="stylesheet" href="vendor/uikit/dist/css/uikit.min.css" />
    <link rel="stylesheet" id="tema" href="assets/css/main.css" />
    <meta name="keywords" content="your, tags" />
    <meta name="description" content="150 words" />
    <meta name="language" content="SL">
    <meta name="robots" content="index,follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <meta name="og:title" content="The Rock" />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="http://www.imdb.com/title/tt0117500/" />
    <meta name="og:image" content="http://ia.media-imdb.com/rock.jpg" />
    <meta name="og:site_name" content="IMDb" />
    <meta name="og:description" content="A group of U.S. Marines, under command of..." />
</head>
<body>

<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-container uk-container-xsmall">
        <select class="uk-select" id="cssSelector">
            <option value="1">Privzeta tema</option>
            <option value="2">Modra tema</option>
            <option value="3">Črna tema</option>
            <option value="4">Kontrastna tema</option>
        </select>
        <div> Velikost pisave
            <ul class="uk-iconnav">
                <li><button uk-icon="icon: plus" id="big"></button></li>
                <li><button uk-icon="icon: minus" id="small"></button></li>
            </ul>
        </div>
    </div>
</nav>
<div class="uk-container">
    <h1>Naslov 1</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet
        ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore
        doloribus!</p>
</div>

<form>
    <fieldset class="uk-fieldset">

        <legend class="uk-legend">Legend</legend>

        <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Input">
        </div>

        <div class="uk-margin">
            <select class="uk-select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>

        <div class="uk-margin">
            <textarea class="uk-textarea" rows="5" placeholder="Textarea"></textarea>
        </div>

        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label><input class="uk-radio" type="radio" name="radio2" checked> A</label>
            <label><input class="uk-radio" type="radio" name="radio2"> B</label>
        </div>

        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label><input class="uk-checkbox" type="checkbox" checked> A</label>
            <label><input class="uk-checkbox" type="checkbox"> B</label>
        </div>

        <div class="uk-margin">
            <input class="uk-range" type="range" value="2" min="0" max="10" step="0.1">
        </div>

    </fieldset>
</form>

<ul class="uk-list">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>

<script src="vendor/jquery/dist/jquery.min.js"></script>
<script src="vendor/uikit/dist/js/uikit.min.js"></script>
<script src="vendor/uikit/dist/js/uikit-icons.min.js"></script>
<script src="assets/js/scripts.js"></script>
</body>
</html>
