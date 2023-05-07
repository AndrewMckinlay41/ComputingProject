/**
 * Main function, run on page load
 */
function main() {
    // Get the HTML element with ID `booking-form`
    let form = document.getElementById("booking-form");

    // This callback will be run when the form is submitted
    form.addEventListener("submit", function(e) {
        // Don't refresh the page on form submit
        e.preventDefault();

        processForm(e.target.children);
    });
}

/**
 * Submits form contents to AWS Amplify
 */
function processForm(elements) {
    for (let child of elements) {
        // Ignore children of the form element which are not form inputs
        if (child.tagName != "INPUT" && child.tagName != "TEXTAREA") {
            continue;
        }

        // TODO:
        // Submit booking request
        // `child.name` has the name of the form element
        // `child.value` has the value
        console.log(child.name, child.value);
    }
};

// Add event listener to run main function on page load
addEventListener("load", (_) => {main()});