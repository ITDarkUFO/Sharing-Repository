$cart = [];

function addtocart(id)
{
    if ($cart.indexOf(id) == -1)
    {
        alert("Объект добавлен в массив");
        $cart.push(id);
    }
    else
    {
        alert("Объект убран из массива");
        delete $cart[$cart.indexOf(id)];
    }
    document.cookie="cart=" + $cart;
}

$.ajax({
    url: './js/json/paintings.json',
    success: function($data)
    {
        $object = "<div class=\"lot_list\">";
        $data.forEach($value => {
            $id = $value["id"];
            $path = $value["path"];
            $author = $value["author"];
            $author_path = $value["author_path"]
            $title = $value["title"];
            $desc = $value["desc"];
            $img = $value["img"];
            $start_cost = $value["start_cost"];

            $object += "<div class=\"lot\">";
            $object += "<a class=\"lot_link\" href=\"" + $path + "\" title=\"" + $title + "\">" + $title + "</a>";
            $object += "<a class=\"lot_author\" href=\"" + $author_path + "\">" + $author + "</a>";
            $object += "<img class=\"lot_img\" src=\"" + $img + "\" alt=\"" + $title + "\"/>";
            $object += "<span class=\"lot_desc\">" + $desc + "</span>";
            $object += "<span class=\"lot_cost\">Стартовая стоимость: $" + $start_cost + "</span>";
            $object += "<a class=\"add_button\" onclick=\"addtocart(" + $id + ")\">Добавить</a>";
            $object += "</div>";
        });
        $object += "</div>";
        $("main").append($object);
    }
});