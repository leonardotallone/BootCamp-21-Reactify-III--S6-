import React from "react";

const NewPlaylist = ({ name, handleNameChange, handleDescription, description, handleSubmit }) => {
  return (
    <div className="layout m-5">
      <h3 className="title is-3">New Playlist</h3>
      <form onSubmit={handleSubmit}>
        <label className="label my-3">Name</label>
        <input
          onChange={handleNameChange}
          value={name}
          className="input"
          type="text" 
          placeholder="Playlist name"
        />
        <label className="label my-3">Description</label>
        <textarea
          onChange={handleDescription}
          className="textarea"
          placeholder="Description"
        ></textarea>
        <button className="button is-link my-5">Submit</button>
      </form>
    </div>
  );
};
export default NewPlaylist;
