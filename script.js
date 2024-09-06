var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        // Close all content elements
        var content = document.getElementsByClassName("content");
        for (var j = 0; j < content.length; j++) {
            if (content[j] !== this.nextElementSibling) {
                content[j].style.display = "none";
            }
        }

        // Toggle the clicked element
        this.classList.toggle("active");
        var currentContent = this.nextElementSibling;
        if (currentContent.style.display === "block") {
            currentContent.style.display = "none";
        } else {
            currentContent.style.display = "block";
        }
    });
}