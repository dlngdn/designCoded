import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectDocument } from '../actions/index';

class DocumentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="document-container">
          <div className="document-editor focused-mode">
            <div className="parts-screen editor document theme-5">
              <div className="parts-screen-body scrollable p-body">
                <div className="parts-screen-children-wrapper p-child-wrapper">
                  <div className="editor-id-overlay-links" ></div>
                  <article className="document-content document-padding-xlarge parent">
                    <span className="selection-decoy"></span>
                    <div className="section" data-section-style="1" data-section-type="0">
                      <div className="backspace-decoy"><br/></div>
                      <div className="content redact" data-contextmenu="section-context-menu">
                        {this.props.currentDocument[1]}
                      </div>
                      </div>
                      <div className="section" data-section-style="0" data-section-type="0">
                        <div className="backspace-decoy"><br/></div>
                        <div className="content redact" data-contextmenu="section-context-menu">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate convallis molestie. Nulla rhoncus lacus nec tellus dictum, eget consectetur justo volutpat. Curabitur eget vulputate magna. Sed mattis eu eros eget gravida. Pellentesque tempor rutrum mauris, id commodo eros maximus sit amet.
                        </div>
                      </div>
                      <div className="section" data-section-style="3" data-section-type="0">
                        <div className="backspace-decoy"><br/></div>
                        <div className="content redact">
                          Pellentesque pharetra tempor pretium
                        </div>
                      </div>
                      <div className="section" data-section-style="0" data-section-type="0">
                        <div className="backspace-decoy"><br/></div>
                        <div className="content redact">
                          Duis non quam vel est posuere pellentesque at sed velit. Nunc accumsan orci quis nibh tempus pharetra. Nulla egestas quam orci. Duis non dui lectus. Duis tincidunt, odio eget cursus imperdiet, risus risus pulvinar felis, a luctus enim ante id sem.
                        </div>
                      </div>
                      <div className="section" data-section-style="3" data-section-type="0">
                        <div className="backspace-decoy"><br/></div>
                        <div className="content redact">
                          Morbi vitae nunc augue
                        </div>
                      </div>
                      <div className="section" data-section-style="6" data-section-type="1">
                        <div className="backspace-decoy"><br/></div>
                        <div className="content">
                          <div className="list-section-container" >
                            <ul role="list">
                              <editorui className="width-sizer" >
                                <span className="width-sizer-text">
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                </span>
                              </editorui>
                              <li role="listitem" data-indent-start="0">
                                <div className="section" data-section-style="0" data-section-type="0">
                                  <div className="backspace-decoy"><br/></div>
                                  <div className="content redact">
                                    Fusce hendrerit
                                  </div>
                                </div>
                              </li>
                              <li role="listitem">
                                <div className="section" data-section-style="0" data-section-type="0">
                                  <div className="backspace-decoy"><br/></div>
                                  <div className="content redact" >
                                    Vivamus scelerisque
                                  </div>
                                </div>
                              </li>
                              <li role="listitem">
                                <div className="section" data-section-style="0" data-section-type="0">
                                  <div className="backspace-decoy"><br/></div>
                                  <div className="content redact" >
                                    Nunc maximus
                                  </div>
                                </div>
                              </li>
                              <li role="listitem">
                                <div className="section" data-section-style="0" data-section-type="0">
                                  <div className="backspace-decoy"><br/></div>
                                  <div className="content redact">
                                    Vivamus consequat quis
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="section" data-section-style="0" data-section-type="0">
                        <div className="backspace-decoy"><br/></div>
                          <div className="content redact">
                            Ut semper imperdiet dui non scelerisque. Ut eu metus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non lorem nisi.
                          </div>
                        </div>
                        <div className="section" data-section-style="3" data-section-type="0">
                          <div className="backspace-decoy"><br/></div>
                            <div className="content redact">
                              Phasellus hendrerit commodo
                            </div>
                          </div>
                          <div className="section" data-section-style="18" data-section-type="16">
                            <div className="backspace-decoy"><br/></div>
                            <div className="content">
                              <div className="icon"></div>
                              </div>
                            </div>
                            <div className="section" data-section-style="2" data-section-type="0">
                              <div className="backspace-decoy"><br/></div>
                              <div className="content redact">
                                Pellentesque gravida
                              </div>
                            </div>
                            <div className="section" data-section-style="0" data-section-type="0">
                              <div className="backspace-decoy"><br/></div>
                              <div className="content redact">
                                Vestibulum consequat lorem massa, sit amet congue mi pellentesque pulvinar. Sed porttitor eros sed sodales scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                              </div>
                            </div>
                            <div className="section" data-section-style="0" data-section-type="0">
                              <div className="backspace-decoy"><br/></div>
                              <div className="content redact" ><br/></div>
                            </div>
                            <div className="section" data-section-style="3" data-section-type="0">
                              <div className="backspace-decoy"><br/></div>
                              <div className="content redact" >
                                Cras felis arcu
                              </div>
                            </div>
                            <div className="section" data-section-style="0" data-section-type="0">
                              <div className="backspace-decoy"><br/></div>
                              <div className="content redact">
                                Vivamus a lectus turpis. Nunc consequat ipsum ut odio tincidunt, eu porta diam efficitur. Aenean tortor quam, semper quis condimentum ac, vehicula ut massa. In pharetra malesuada gravida. Cras in urna urna. Quisque consequat ultricies massa in sodales.
                              </div>
                            </div>
                          </article>
                          <div></div>
                        </div>
                        <div className="figure-gutter-display">
                          <div className="figure-gutter-display-add">
                            <span className="figure-gutter-display-tooltip" >
                            </span>
                          </div>
                          <div className="figure-gutter-display-empty">
                            <div className="figure-gutter-display-empty-item">
                            <span className="figure-gutter-display-tooltip" ></span>
                          </div>
                          <div className="figure-gutter-display-empty-item" >
                            <span className="figure-gutter-display-tooltip" data-label="Insert Spreadsheet"></span>
                          </div>
                          <div className="figure-gutter-display-empty-item" >
                            <span className="figure-gutter-display-tooltip" data-label="Insert Checklist">
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectDocument}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentContainer);
