import React from 'react';
import styles from '../styles/AddListing.module.css';

function AddListing({listingsToggle}) {

  return (
    <div className={styles.listingBackground}>
        <div className={styles.listingBody}>
          <button className={styles.closeButton} onClick={(e) => {listingsToggle(); e.preventDefault()}}>Close</button>
            <form className={styles.listingForm}>

              <div className={styles.imageInputs}>
                <label htmlFor="thumbnail">Choose thumbnail image</label>
                <input className={styles.thumbnailInput} name="thumbnail" type="image" placeholder="img"></input>
                <label htmlFor="otherimages">Add some more images</label>
                <input className={styles.imgInput} name="otherimages" type="image" placeholder="img"></input>
              </div>

              <div className={styles.mainInputs}>
                <label htmlFor="petname">Name of Pet</label>
                <input className={styles.nameInput} type="text" placeholder="petname" name="petname"></input>

                <legend>Gender</legend>
                <div className={styles.radioSelector}>
                  <label className={styles.radioLabel} htmlFor="male">Male</label>
                  <input className={styles.radioInput} type="radio" placeholder="desc" name="male"></input>

                  <label className={styles.radioLabel} htmlFor="female">Female</label>
                  <input className={styles.radioInput} type="radio" placeholder="desc" name="female"></input>
                </div>

                <label htmlFor="desc">Description</label>
                <input className={styles.descriptionInput} placeholder="desc" name="desc"></input>

                <input className={styles.fileInput} id="file" type="file" name="file"/>

                <legend>Chipped?</legend>
                <div className={styles.radioSelector}>
                  <label className={styles.radioLabel} htmlFor="male">Yes</label>
                  <input className={styles.radioInput} type="radio" placeholder="desc" name="male"></input>

                  <label className={styles.radioLabel} htmlFor="female">No</label>
                  <input className={styles.radioInput} type="radio" placeholder="desc" name="female"></input>
                </div>

                <input className="submitButton" type="submit" value="Add listing"></input>
              </div>
            </form>
        </div>
    </div>
  )
}

export default AddListing;