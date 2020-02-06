const API = {
    async getLastWorkout() {
      let res;
      try {
        res = await fetch("/api/workouts");
      } catch (err) {
        console.log(err)
      }
      const json = await res.json();
  
      return json[json.length - 1];
    },
    
    async addExercise(data) {
      const id = location.search.split("=")[1];
    }
      const res = await fetch("/api/workouts/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };