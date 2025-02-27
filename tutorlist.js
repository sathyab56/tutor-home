
        const minPriceInput = document.getElementById("minPrice");
    const maxPriceInput = document.getElementById("maxPrice");
    const priceRangeMin = document.getElementById("priceRangeMin");
    const priceRangeMax = document.getElementById("priceRangeMax");
    
    function updatePriceInputs() {
        minPriceInput.value = priceRangeMin.value;
        maxPriceInput.value = priceRangeMax.value;
    }
    
    function updateSliders() {
        priceRangeMin.value = minPriceInput.value;
        priceRangeMax.value = maxPriceInput.value;
    }
    
    // Ensure min slider does not go beyond max
    priceRangeMin.addEventListener("input", function () {
        if (parseInt(priceRangeMin.value) > parseInt(priceRangeMax.value) - 100) {
            priceRangeMin.value = parseInt(priceRangeMax.value) - 100;
        }
        updatePriceInputs();
    });
    
    // Ensure max slider does not go below min
    priceRangeMax.addEventListener("input", function () {
        if (parseInt(priceRangeMax.value) < parseInt(priceRangeMin.value) + 100) {
            priceRangeMax.value = parseInt(priceRangeMin.value) + 100;
        }
        updatePriceInputs();
    });
    
    // Update range when user types in number boxes
    minPriceInput.addEventListener("input", updateSliders);
    maxPriceInput.addEventListener("input", updateSliders);
    
    
    
        function toggleSubjects() {
            let extraSubjects = document.getElementById("extraSubjects");
            let showMoreText = document.getElementById("showMoreSubjects");
    
            if (extraSubjects.style.display === "none") {
                extraSubjects.style.display = "block";
                showMoreText.textContent = "Show Less -";
            } else {
                extraSubjects.style.display = "none";
                showMoreText.textContent = "Show More +";
            }
        }
        function toggleCities() {
            const allCities = document.querySelector('.allCities');
            const showMore = document.querySelector('.show-more');
    
            if (allCities.classList.contains('hidden')) {
                allCities.classList.remove('hidden');
                showMore.textContent = 'Show Less -';
            } else {
                allCities.classList.add('hidden');
                showMore.textContent = 'Show More +';
            }
        }
        document.addEventListener("DOMContentLoaded", function () {
            const filterButton = document.getElementById("filterButton");
            const filterMenu = document.getElementById("filterMenu");
        
            if (filterButton && filterMenu) {
                // Show or hide the filter menu on button click
                filterButton.addEventListener("click", function (event) {
                    event.stopPropagation(); // Prevents menu from closing immediately
                    filterMenu.style.display = (filterMenu.style.display === "block") ? "none" : "block";
                });
        
                // Hide the filter menu when clicking outside
                document.addEventListener("click", function (event) {
                    if (!filterMenu.contains(event.target) && !filterButton.contains(event.target)) {
                        filterMenu.style.display = "none";
                    }
                });
        
                // Prevent menu from closing when clicking inside
                filterMenu.addEventListener("click", function (event) {
                    event.stopPropagation();
                });
            } else {
                console.error("Filter button or menu not found!");
            }
        });
        
        
        
        
        
        document.getElementById("gridViewBtn").addEventListener("click", function () {
            let tutorContainer = document.getElementById("tutorContainer");
            tutorContainer.classList.remove("list-view");
            tutorContainer.classList.add("grid-view");
            
            this.classList.add("active");
            document.getElementById("listViewBtn").classList.remove("active");
        });
        
        document.getElementById("listViewBtn").addEventListener("click", function () {
            let tutorContainer = document.getElementById("tutorContainer");
            tutorContainer.classList.remove("grid-view");
            tutorContainer.classList.add("list-view");
            
            this.classList.add("active");
            document.getElementById("gridViewBtn").classList.remove("active");
        });
        
        
    
        function addTutor() {
            let name = document.getElementById("tutorName").value.trim();
            let course = document.getElementById("tutorCourse").value.trim() || "General Subject";
            let description = document.getElementById("tutorDescription").value.trim() || "No description available.";
            let imageInput = document.getElementById("tutorImage");
        
            if (name === "") {
                alert("Please enter the tutor's name!");
                return;
            }
        
            let tutorContainer = document.getElementById("tutorContainer");
        
            // Switch to List View by default
            tutorContainer.classList.remove("grid-view");
            tutorContainer.classList.add("list-view");
        
            // Update active button styles
            document.getElementById("listViewBtn").classList.add("active");
            document.getElementById("gridViewBtn").classList.remove("active");
        
            let card = document.createElement("div");
            card.classList.add("tutor-card");
        
            let img = document.createElement("img");
            img.src = "https://via.placeholder.com/50"; // Default profile picture
        
            // Handle Image Upload
            if (imageInput.files && imageInput.files[0]) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    img.src = e.target.result; // Set uploaded image
                };
                reader.readAsDataURL(imageInput.files[0]);
            }
        
            let tutorInfo = document.createElement("div");
            tutorInfo.classList.add("tutor-info");
            tutorInfo.innerHTML = `
                <span class="tutor-name">${name}</span>
                <span class="tutor-course">${course}</span>
                <span class="tutor-description">${description}</span>
            `;
        
            card.appendChild(img);
            card.appendChild(tutorInfo);
            
            tutorContainer.appendChild(card);
        
            // Clear input fields
            document.getElementById("tutorName").value = "";
            document.getElementById("tutorCourse").value = "";
            document.getElementById("tutorDescription").value = "";
            document.getElementById("tutorImage").value = "";
        }
        
        
    