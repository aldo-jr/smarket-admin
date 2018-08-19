import React, { Component } from "react";
import { Field } from "redux-form";
import cx from 'classnames';
import Downshift from "downshift";
import matchSorter from "match-sorter";

const itemToString = item => (item ? item : "");

const DownShiftInput = ({ input, meta, inputClassName, label, items }) => (
    <Downshift
        {...input}
        onStateChange={({ inputValue }) => {
            return input.onChange(inputValue);
        }}
        itemToString={itemToString}
        selectedItem={input.value}
    >
        {({
            getInputProps,
            getItemProps,
            getLabelProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem
        }) => {
            const filteredItems = matchSorter(items, inputValue, {
                maxRanking: matchSorter.rankings.STARTS_WITH
            });
            return (
                <div>
                    <div style={{ position: "relative" }}>
                        <input
                            className={cx(inputClassName, 'form-control')}
                            {...getInputProps({
                                name: input.name,
                                onBlur: input.onBlur
                            })}
                        />
                        {isOpen &&
                            !!filteredItems.length && (
                                <div
                                    style={{
                                        background: "white",
                                        border: '1px solid #000', 
                                        padding: '5px 15px',
                                        position: "absolute",
                                        top: "100%",
                                        left: 0,
                                        width: "100%",
                                        zIndex: 4
                                    }}
                                >
                                    {filteredItems.map((item, index) => (
                                        <div
                                            {...getItemProps({
                                                key: item,
                                                index,
                                                item,
                                                style: {
                                                    backgroundColor:
                                                        highlightedIndex === index ? "lightgray" : "white",
                                                    fontWeight: selectedItem === item ? "bold" : "normal"
                                                }
                                            })}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                    </div>
                </div>
            );
        }}
    </Downshift>
);

const TypeAheadField = props => <Field component={DownShiftInput} {...props} />;

export default TypeAheadField;
