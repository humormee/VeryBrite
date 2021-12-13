import React from "react";

export var getTime = () => {
  let today = new Date();
  let min = today.getMinutes();
  let hh = today.getHours();
  let dd = today.getDate();
  let mm = today.getMonth()+1;
  let yyyy = today.getFullYear();
  if(min<10){
    min='0'+min
  } 
  if(hh<10){
    hh='0'+hh
  } 
  if(dd<10){
    dd='0'+dd
  } 
  if(mm<10){
    mm='0'+mm
  } 
  return yyyy+'-'+mm+'-'+dd+'T'+hh+ ":"+min;
}

export var renderErrors = (field) => {
  if(!this.state.hasSubmit) {
      return
    }
    switch (field) {
      case 'title':
        if(this.state.title.length >= 40) {
          return (
            <p className="title-errors">titles must be under 40 characters</p>
          );
        } else if(this.state.title.length < 1){
          return (
            <p className="title-errors">must enter a title</p>
          );
        } else {
          return null
        }
      case 'start_time':
        if(this.state.start_time < this.getCurrentTime() && this.state.start_time.length > 0) {
          return (
            <p className="date-errors">Start time must be after the current time</p>
          );
        } else {
          return null
        }

      case 'category':
        if(this.state.category.length < 1 || this.state.category === "Select Category"){
          return (
            <p className="category-errors">must select a category</p>
          )
        } else {
          return null;
        }
       
      case 'description':
        if(this.state.description.length < 1) {
          return (
            <p className="description-errors">add a description</p>
          )
        } else {
          return null;
        }
      
      case 'end_time':
        if(this.state.start_time > this.state.end_time && this.state.end_time.length > 0) {
          return (
            <p className="date-errors">Start time must be before end time</p>
          );
        } else {
          return null
        }
      default:
        break;
    }
}

export var isErrors = () => {
  if(this.renderErrors('title') === null && this.renderErrors('start_time') === null && this.renderErrors('end_time') === null && this.renderErrors('category') === null && this.renderErrors('description') === null) {
      return false;
    } else {
      return true;
    }
}