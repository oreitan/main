<!DOCTYPE html>
<html>
    <head>
        <title>forms</title>
    </head>
    <body>
        <section>
            Welcome
            <?php
                $un = $_GET["reg_un"];
                $pw = $_GET["reg_pass"];
                if ($un == "or" && $pw == "111")
                    echo "<h2>Good morning user: " . $un . "</h2>";
                else
                    echo "<h2>you shell not pass</h2>";
                ?>
        </section>
    </body>
</html>