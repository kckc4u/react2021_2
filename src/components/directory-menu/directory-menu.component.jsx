import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySelection} from '../../redux/directory/directory.selector';

import "./directory-menu.style.scss";

import MenuItem from "../menu-item/menu-item.component";

const DirectoryMenu = ({collection}) => (
  <div className="directory-menu">
    {collection.map((item, i) => (
      <MenuItem {...item} key={i} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collection: selectDirectorySelection
})

export default connect(mapStateToProps)(DirectoryMenu);
