import React from 'react';

function ModalTemplate() {
  return (
    <div>
      <div className="titleandsubtitlediv">
        <div>Title</div>
        <div>subtitle</div>
      </div>
      <div className="divtocontainform">
        <form>
          <input />
          <input />
          <input />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default ModalTemplate;
