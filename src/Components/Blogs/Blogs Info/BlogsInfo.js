import React from 'react';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styles from '../blogs.module.css';

function BlogsInfo() {
  return (
    <div>
      {/* Div1 */}

      <div className={styles.div1}>
        <p className={styles.heading}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, laboriosam.
        </p>
        <a className={styles.searchIcon}>
          <input
            type="text"
            placeholder="Search here..."
            className={styles.input}
          />
          <SearchOutlinedIcon className={styles.icon} />
        </a>
      </div>

      {/* Div2 */}

      <div className={styles.div2}>
        <div className={styles.div2_1}>
          <p className={styles.heading}>Popular Articles</p>
          <img
            src="https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg"
            alt="gym men"
            className={styles.img}
          />
        </div>
        <div className={styles.div2_2}>
          <p className={styles.heading}>Name of the Article will be here</p>
          <p className={styles.lorem}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            eligendi tempora ducimus cum officiis. Nam necessitatibus sapiente
            earum nobis minus, repudiandae vel odio aut vero impedit facere
            itaque praesentium dolores officiis doloremque maiores nihil fugiat.
            Rem in quia suscipit numquam, ut eveniet veniam architecto vero?
            Deserunt dolore esse numquam odit?
          </p>
          <p className={styles.dataName}>03 July 2023</p>
          <p className={styles.dataName}>Calert</p>
          <button className={styles.btn}>Read Article</button>
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.div2_2}>
          <p className={styles.heading}>Name of the Article will be here</p>
          <p className={styles.lorem}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            eligendi tempora ducimus cum officiis. Nam necessitatibus sapiente
            earum nobis minus, repudiandae vel odio aut vero impedit facere
            itaque praesentium dolores officiis doloremque maiores nihil fugiat.
            Rem in quia suscipit numquam, ut eveniet veniam architecto vero?
            Deserunt dolore esse numquam odit?
          </p>
          <p className={styles.dataName}>03 July 2023</p>
          <p className={styles.dataName}>Calert</p>
          <button className={styles.btn}>Read Article</button>
        </div>
        <div className={styles.div2_1}>
          <p className={styles.heading}>Popular Articles</p>
          <img
            src="https://images.pexels.com/photos/3253498/pexels-photo-3253498.jpeg"
            alt="gym men"
            className={styles.img}
          />
        </div>
      </div>

      {/* Div3 */}

      <p className={styles.heading2}>Recent Article</p>

      <div className={styles.div3}>
        {/* 1 */}
        <div className={styles.sub_Div3}>
          <img
            src="https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg"
            alt="gym men"
            className={styles.div3Img}
          />
          <p className={styles.div3ParaHeading}>
            Name of the Article will be here
          </p>
          <p className={styles.div3ParaHeading}>Name and Date</p>
          <p className={styles.div3Lorem}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            culpa quas optio iure deserunt quibusdam ducimus voluptate
            consequatur tenetur
          </p>
          <div className={styles.btnDiv}>
            <div>
              <button className={styles.div3Btn}>Read</button>
            </div>
            <div className={styles.div3Date}>
              <p>03 July 2023</p>
              <p>Stiifen</p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className={styles.sub_Div3}>
          <img
            src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
            alt="gym women"
            className={styles.div3Img}
          />
          <p className={styles.div3ParaHeading}>
            Name of the Article will be here
          </p>
          <p className={styles.div3ParaHeading}>Name and Date</p>
          <p className={styles.div3Lorem}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            culpa quas optio iure deserunt quibusdam ducimus voluptate
            consequatur tenetur
          </p>
          <div className={styles.btnDiv}>
            <div>
              <button className={styles.div3Btn}>Read</button>
            </div>
            <div className={styles.div3Date}>
              <p>03 July 2023</p>
              <p>Stiifen</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className={styles.sub_Div3}>
          <img
            src="https://images.pexels.com/photos/3838937/pexels-photo-3838937.jpeg"
            alt="gym men"
            className={styles.div3Img}
          />
          <p className={styles.div3ParaHeading}>
            Name of the Article will be here
          </p>
          <p className={styles.div3ParaHeading}>Name and Date</p>
          <p className={styles.div3Lorem}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            culpa quas optio iure deserunt quibusdam ducimus voluptate
            consequatur tenetur
          </p>
          <div className={styles.btnDiv}>
            <div>
              <button className={styles.div3Btn}>Read</button>
            </div>
            <div className={styles.div3Date}>
              <p>03 July 2023</p>
              <p>Stiifen</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.div3}>
        {/* 4 */}
        <div className={styles.sub_Div3}>
          <img
            src="https://images.pexels.com/photos/1566414/pexels-photo-1566414.jpeg"
            alt="gym men"
            className={styles.div3Img}
          />
          <p className={styles.div3ParaHeading}>
            Name of the Article will be here
          </p>
          <p className={styles.div3ParaHeading}>Name and Date</p>
          <p className={styles.div3Lorem}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            culpa quas optio iure deserunt quibusdam ducimus voluptate
            consequatur tenetur
          </p>
          <div className={styles.btnDiv}>
            <div>
              <button className={styles.div3Btn}>Read</button>
            </div>
            <div className={styles.div3Date}>
              <p>03 July 2023</p>
              <p>Stiifen</p>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className={styles.sub_Div3}>
          <img
            src="https://images.pexels.com/photos/3763115/pexels-photo-3763115.jpeg"
            alt="gym men"
            className={styles.div3Img}
          />
          <p className={styles.div3ParaHeading}>
            Name of the Article will be here
          </p>
          <p className={styles.div3ParaHeading}>Name and Date</p>
          <p className={styles.div3Lorem}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            culpa quas optio iure deserunt quibusdam ducimus voluptate
            consequatur tenetur
          </p>
          <div className={styles.btnDiv}>
            <div>
              <button className={styles.div3Btn}>Read</button>
            </div>
            <div className={styles.div3Date}>
              <p>03 July 2023</p>
              <p>Stiifen</p>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div className={styles.sub_Div3}>
          <img
            src="https://images.pexels.com/photos/3768927/pexels-photo-3768927.jpeg"
            alt="gym men"
            className={styles.div3Img}
          />
          <p className={styles.div3ParaHeading}>
            Name of the Article will be here
          </p>
          <p className={styles.div3ParaHeading}>Name and Date</p>
          <p className={styles.div3Lorem}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            culpa quas optio iure deserunt quibusdam ducimus voluptate
            consequatur tenetur
          </p>
          <div className={styles.btnDiv}>
            <div>
              <button className={styles.div3Btn}>Read</button>
            </div>
            <div className={styles.div3Date}>
              <p>03 July 2023</p>
              <p>Stiifen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsInfo
