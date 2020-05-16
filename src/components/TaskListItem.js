import React from "react";
import './style/ViewFile.css'

export const TaskLstItem = ({description}) => (
  <div className="item col">
      <div>
          Task
          About
          Complete By
      </div>
      <div className="lineVer" />
      <div>
          {description}
      </div>
  </div>
);