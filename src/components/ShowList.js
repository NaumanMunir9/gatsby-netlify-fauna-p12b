// libraries
import React from "react"

// components
import ListCard from "./ListCard"

export default function ShowList({ list, refreshList }) {
  return (
    <div>
      <>
        <h2 className="my-4">Todo List</h2>

        {list.length === 0 && <h5>Add Todo to Populate!</h5>}

        {list &&
          list
            .filter(listItem => !listItem.archived)
            .map(listItem => (
              <ListCard
                key={listItem._id}
                listItem={listItem}
                refreshList={refreshList}
              />
            ))}
      </>

      <>
        <h2 className="my-4">Archived List</h2>

        {list.length === 0 && <h5>Click Archive to Populate!</h5>}

        {list &&
          list
            .filter(listItem => listItem.archived)
            .map(listItem => (
              <ListCard
                key={listItem._id}
                listItem={listItem}
                refreshList={refreshList}
              />
            ))}
      </>
    </div>
  )
}
