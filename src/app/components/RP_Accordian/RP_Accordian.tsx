import { useEffect, useState } from "react";
import styles from "./RP_Accordian.module.css";
import data from "./data";
import { Divider } from "../Divider";

//need single selection
//and multiple selection

const RP_Accordian = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] =
    useState<boolean>(false);
  const [multiple, setMultiple] = useState<any>([]);
  const enabled = enableMultiSelection.toString();

  const handleSingleSelection = (getCurrentId: string) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId: string) => {
    //copy the current state so we don't mutate it
    let cpyMultiple = [...multiple];
    //returns -1 if the index is not in the array yet
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    //if it doesn't exist in the array, push it
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    //if it does exist, remove it with splice by index, only 1 item
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    //set the new state
    setMultiple(cpyMultiple);
  };

  return (
    <>
      <h2 className={styles.header}>Accordian</h2>
      <div className={styles.wrapper}>
        <button
          onClick={() => {
            setEnableMultiSelection(!enableMultiSelection);
          }}
        >
          Enable Multi Selection:{" "}
          <span
            style={{
              color: enabled === "true" ? "green" : "#800000",
              fontSize: "20px",
            }}
          >
            {enabled}
          </span>
        </button>
        <div className={styles.accordian}>
          {data && data.length > 0 ? (
            data.map((dataItem, index) => (
              <div className={styles.item} key={index}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className={styles.title}
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className={styles.content}>{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </>
  );
};

export { RP_Accordian };
