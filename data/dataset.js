const dataset = {
  tasks: {
    "task-1": {
      id: "task-1",
      priority: 0,
      category: "SITEPLAN",
      image: "",
      title: "Mobile Siteplan",
      desc: "Create a siteplan for application mobile and some userflow",
      attachment: 0,
      flag: 0,
      date: "Jan 13",
      message: 0
    },
    "task-2": {
      id: "task-2",
      priority: 0,
      category: "WIREFRAME",
      image: "",
      title: "Wireframe Aplikasi Course",
      desc: "",
      attachment: 0,
      flag: 0,
      date: "Jan 13",
      message: 0
    },
    "task-3": {
      id: "task-3",
      priority: 1,
      category: "DESIGN SYSTEM",
      image: "",
      title: "Design System",
      desc: "Review Design system for website course instructor",
      attachment: 0,
      flag: 1,
      date: "Jan 13",
      message: 0
    },
    "task-4":{
      id: "task-4",
      priority: 0,
      category: "COLOR",
      image: "",
      title: "Color Palette",
      desc: "Review Design system for website course instructor",
      attachment: 0,
      flag: 0,
      date: "Jan 13",
      message: 0
    },
    "task-5":{
      id: "task-5",
      priority: 2,
      category: "SITEPLAN",
      image: "",
      title: "Mobile Siteplan",
      desc: "Create a siteplan for application mobile and some userflow",
      attachment: 0,
      flag: 1,
      date: "Jan 13",
      message: 0
    },
    "task-6":{
      id: "task-6",
      priority: 0,
      category: "WIREFRAME",
      image: "",
      title: "Wireframe Aplikasi Course",
      desc: "",
      attachment: 0,
      flag: 1,
      date: "Jan 13",
      message: 0
    },
    "task-7":{
      id: "task-7",
      priority: 3,
      category: "DESIGN SYSTEM",
      image: "",
      title: "Design System",
      desc: "Review Design system for website course instructor",
      attachment: 0,
      flag: 0,
      date: "Jan 13",
      message: 0
    },
    "task-8":{
      id: "task-8",
      priority: 3,
      category: "COLOR",
      image: "",
      title: "Color Palette",
      desc: "Review Design system for website course instructor",
      attachment: 0,
      flag: 0,
      date: "Jan 13",
      message: 0
    }
  },
  columns: {
    "0": { id: "0", title: "Todo", taskIds: ['task-1', 'task-6', 'task-7']},
    "1": { id: "1", title: "In progress", taskIds: ['task-2', 'task-3'] },
    "2": { id: "2", title: "Review", taskIds: ['task-5'] },
    "3": { id: "3", title: "Completed", taskIds: ['task-4', 'task-8'] }
},
columnOrder: ["0", "1", "2", "3"]}
export default dataset