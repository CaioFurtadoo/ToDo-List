$(document).ready(function () {
    let isDragging = false;
    var idDropped = "drop1";
    var lastIdDropped = null;
    var draggedItem = null;

    $(".circle").on("mousedown", function (event) {
        isDragging = true;
        $(this).addClass("drag");
        draggedItem = $(this);

        draggedItem.css({
            transition: "transform 0.1s ease",
        });

        const x = event.clientX;
        const y = event.clientY;

        const parent = $(`#${idDropped}`);
        parent.css({ position: "unset" });

        $(".circle.drag").css({
            top: y - 60 + "px",
            left: x - 60 + "px",
        });
    });

    $(document).on("mousemove", function (event) {
        if (isDragging) {
            const x = event.clientX;
            const y = event.clientY;

            $(".circle.drag").css({
                top: y - 60 + "px",
                left: x - 60 + "px",
            });
            draggedItem.css({
                transition:
                    "left 0.1s ease-out, top 0.1s ease-out, transform 0.1s ease",
            });
        }
    });

    $(".drop").hover(
        function () {
            idDropped = $(this).attr("id");
            if (isDragging) {
                $(`#${idDropped}`).toggleClass("dropping");
                $(`#${lastIdDropped}`).toggleClass("dropping");
            }
        },
        function () {
            lastIdDropped = idDropped;
            idDropped = $(this).attr("id");
        }
    );

    $(document).on("mouseup", function () {
        if (isDragging) {
            isDragging = false;
            draggedItem.removeClass("drag");
            const parent = $(`#${idDropped}`);
            parent.css({ position: "relative" });
            draggedItem.css({
                top: "85px",
                left: "85px",
            });
            draggedItem.css({
                transition:
                    "left 0.12s ease-out, top 0.12s ease-out, transform 0.1s ease",
            });
            $(`#${idDropped}`).append(draggedItem);
        }
    });
});
