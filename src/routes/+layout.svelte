<script>
    import "../style/app.scss";
</script>

<header>
    <div class="container">
        <div class="logo">
            <img src="/logo.png" alt="X" />
            <div class="info">
                <h1>Svelte pizza</h1>
                <div class="description">Сама смачна піца</div>
            </div>
        </div>
        <div class="button">
            <button class="btn orange">Button</button>
        </div>
    </div>
</header>

<slot />

<footer>
    <div class="container">Made by ItSchool</div>
</footer>
