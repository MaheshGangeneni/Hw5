class ActivityController {
  static async fetchActivity() {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
      return data.activity;
    } catch (error) {
      console.error('Error fetching activity:', error);
      return null;
    }
  }
}

export default ActivityController;
  