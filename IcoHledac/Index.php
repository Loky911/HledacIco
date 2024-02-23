<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vyhledávání ekonomických subjektů</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Vyhledávání ekonomických subjektů</h1>
        <form id="searchForm">
            <input type="text" id="icoInput" placeholder="Zadejte IČO">
            <button type="submit">Hledat</button>
        </form>
    </div>

    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div id="modalBody"></div>
        </div>
    </div>

    <div class="overlay"></div>

    <script src="script.js"></script>
</body>
</html>
