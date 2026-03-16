//Load courses when page loads
document.addEventListener("DOMContentLoaded", loadCourses);

    function loadCourses() {
        const filterValue = document.getElementById("levelFilter").value;
            
            //Fetch the XML file
            fetch("courses.xml")
                .then(response => response.text())
                .then(data => {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(data, "application/xml");
                    const courses = xmlDoc.getElementsByTagName("course");
                    
                    let output = "";

                    //Loop through all courses in the XML
                    for (let i = 0; i < courses.length; i++) {
                        const code = courses[i].getElementsByTagName("code")[0].textContent;
                        const title = courses[i].getElementsByTagName("title")[0].textContent;
                        const department = courses[i].getElementsByTagName("department")[0].textContent;
                        const level = courses[i].getElementsByTagName("level")[0].textContent;
                        const description = courses[i].getElementsByTagName("description")[0].textContent;
                        const duration = courses[i].getElementsByTagName("duration")[0].textContent;
                        const requirements = courses[i].getElementsByTagName("entry_requirements")[0].textContent;

                        //Check if it matches the filter
                        if (filterValue === "All" || filterValue === level) {
                            output += `
                                <div class="course-card">
                                    <h3>${title} (${code})</h3>
                                    <p><strong>Department</strong> ${department}</p>
                                    <p><strong>Level:</strong> ${level}</p>
                                    <p><strong>Duration:</strong> ${duration}</p>
                                    <p><strong>Description:</strong> ${description}</p>
                                    <p><strong>Entry Requirements:</strong> ${requirements}</p>
                                </div>`;
                        }
                    }

                //Display the generated HTML
                document.getElementById("courseList").innerHTML = output || "<p>No courses found for this level.</p>";
            })
            .catch(error => console.error("Error loading XML:", error));
        }