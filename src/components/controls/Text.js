import React, { Component } from "react";
import styled from "styled-components";

export const TextControlsStyle = styled.section`
  .controls_container {
    &.text {
      display: grid;
      grid-template-rows: 40px 40px;
      grid-row-gap: 20px;
      .button_text {
        padding: 0 130px 0 12px;
      }
    }
    .row {
      max-width: 100%;
      &.grid {
        display: grid;
        grid-template-columns: 90px 30px 40px 10px 40px 30px 12px;
      }
      .control_item {
        background-color: #333842;
        border-radius: 3px;
        overflow: hidden;
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 500;
        > input {
          width: 100%;
          height: 100%;
        }
        input:checked + label {
          color: #fff;
          font-weight: 500;
        }
        select {
          padding-right: 30px;
          color: rgba(255, 255, 255, 0.9);
        }
        svg {
          position: absolute;
          top: 50%;
          right: 13px;
          transform: translateY(-50%);
        }
        label {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 400;
          user-select: none;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            height: 60%;
            width: 1px;
            background-color: rgba(255, 255, 255, 0.15);
          }
          &:last-of-type::after {
            display: none;
          }
        }
        &.font_size input {
          padding: 0 45px 0 12px;
        }
        &.bold {
          grid-column: 3 / 4;
          justify-content: center;
        }
        &.italic {
          justify-content: center;
          grid-column: 5 / 6;
          font-weight: 500;
          font-size: 18px;
        }
        &.text_transform {
          grid-column: 7 / end;
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;

export default class Text extends Component {
  state = {
    fontSizeValue: 18
  };
  handleChange = e => {
    let key = e.target.getAttribute("data-key");
    let newValue = e.target.value;
    if (key === "fontSize") {
      newValue = this.state.fontSizeValue;
      this.setState({ fontSizeValue: newValue });
    }
    if (key === "bold" || key === "italic") {
      newValue = e.target.checked;
    }
    this.props.updateMyButton(key, newValue);
  };

  updateFontSizeValue = e => {
    let newFontSizeValue = this.state.fontSizeValue;
    if (e.key === "ArrowUp" && newFontSizeValue < 50) {
      newFontSizeValue++;
    } else if (e.key === "ArrowDown" && newFontSizeValue > 14) {
      newFontSizeValue--;
    }
    this.setState({ fontSizeValue: newFontSizeValue });
  };

  render() {
    return (
      <TextControlsStyle className="controls_group">
        <h3>text</h3>
        <div className="controls_container text">
          <div className="row">
            <div className="control_item text">
              <input
                type="text"
                className="button_text"
                placeholder="Default text"
                data-key="buttonText"
                onChange={this.handleChange}
              />
              <select
                className="default_value clickable"
                data-key="fontFamily"
                onChange={this.handleChange}
              >
                <option>Arial</option>
                <option>fantasy</option>
                <option>cursive</option>
                <option>monospace</option>
              </select>
              <svg width="12.118" height="6.039" viewBox="0 0 12.118 6.039">
                <path
                  d="M0,96.879l6.059,6.039,6.059-6.039Z"
                  transform="translate(0 -96.879)"
                  fill="#333842"
                />
              </svg>
            </div>
          </div>
          <div className="row grid">
            <div className="control_item font_size">
              <input
                type="number"
                value={this.state.fontSizeValue}
                data-key="fontSize"
                onKeyDown={this.updateFontSizeValue}
                onChange={this.handleChange}
              />
              <div className="default_value">px</div>
            </div>
            <div className="control_item bold">
              <input
                type="checkbox"
                id="bold"
                data-key="bold"
                onChange={this.handleChange}
              />
              <label htmlFor="bold" className="clickable">
                <b>B</b>
              </label>
            </div>
            <div className="control_item italic">
              <input
                type="checkbox"
                id="italic"
                data-key="italic"
                onChange={this.handleChange}
              />
              <label htmlFor="italic" className="clickable">
                <em>I</em>
              </label>
            </div>
            <div className="control_item text_transform">
              <input
                type="radio"
                name="text_transform"
                id="uppercase"
                value="uppercase"
                data-key="textTransform"
                onChange={this.handleChange}
              />
              <label htmlFor="uppercase" className="clickable">
                TT
              </label>
              <input
                type="radio"
                name="text_transform"
                id="capitalize"
                value="capitalize"
                data-key="textTransform"
                onChange={this.handleChange}
              />
              <label htmlFor="capitalize" className="clickable">
                Tt
              </label>
              <input
                type="radio"
                name="text_transform"
                id="lowercase"
                value="lowercase"
                data-key="textTransform"
                onChange={this.handleChange}
              />
              <label htmlFor="lowercase" className="clickable">
                tt
              </label>
            </div>
          </div>
        </div>
      </TextControlsStyle>
    );
  }
}
