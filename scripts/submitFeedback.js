function saveFeedback(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const comment = document.getElementById("comment").value;
      const feedback = { name, comment };
      let stored = localStorage.getItem("feedbacks");
      let feedbacks = stored ? JSON.parse(stored) : [];
      feedbacks.push(feedback);
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
      displayFeedbacks();
    }

    function displayFeedbacks() {
      const container = document.getElementById("feedbackList");
      container.innerHTML = "";
      const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
      feedbacks.forEach(fb => {
        const div = document.createElement("div");
        div.textContent = `${fb.name}: ${fb.comment}`;
        container.appendChild(div);
      });
    }

    window.onload = displayFeedbacks;