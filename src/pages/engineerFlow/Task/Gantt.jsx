import React, { useEffect, useState } from "react";
import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const GanttChart = ({ milestone }) => {
  const [ganttTasks, setGanttTasks] = useState([]);

  // 🔵 Auto progress calculation
  const calculateProgress = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const today = new Date();

    if (today <= s) return 0;
    if (today >= e) return 100;

    return Math.round(((today - s) / (e - s)) * 100);
  };

  useEffect(() => {
    if (!Array.isArray(milestone)) return;

    let final = [];

    milestone.forEach((m) => {
      // 🟥 Skip if milestone dates missing
      if (!m.milestone_start_date || !m.milestone_end_date) return;

      // 🔵 Milestone bar
      final.push({
        id: `M-${m.milestone_id}`,
        name: m.milestone_name,
        start: new Date(m.milestone_start_date),
        end: new Date(m.milestone_end_date),
        type: "project",
        progress: calculateProgress(m.milestone_start_date, m.milestone_end_date),
        hideChildren: false
      });

      // 🔵 Add each task inside milestone
      if (Array.isArray(m.tasks)) {
        m.tasks.forEach((t) => {
          if (!t.start_date || !t.planned_end_date) return;

          final.push({
            id: `T-${t.task_id}`,
            name: t.task_name,
            start: new Date(t.start_date),
            end: new Date(t.planned_end_date),
            type: "task",
            progress: t.finished_date
              ? 100
              : calculateProgress(t.start_date, t.planned_end_date),
            project: `M-${m.milestone_id}`, // 🔵 Groups task under milestone
            isDisabled: false
          });
        });
      }
    });

    setGanttTasks(final);
  }, [milestone]);

  if (!ganttTasks.length) return <div>No Gantt data available</div>;

  return (
    <Gantt
      tasks={ganttTasks}
      viewMode={ViewMode.Day}
      listCellWidth={""}      // 👈 Removes left-side label column
      columnWidth={65}
    />
  );
};

export default GanttChart;
