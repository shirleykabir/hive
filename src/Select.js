import React, { Component } from "react";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      showDropdown: false,
    };
    this.setValue = this.setValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  setValue(value) {
    this.setState({ value: value });
  }

  handleChange = (event) => {
    this.setState({
      showDropdown: true,
    });

    const {
      target: { value },
    } = event;
    if (this.props.multiple) {
      var index = this.state.value.indexOf(value);
      let filteredArray = this.state.value.filter((v) => v !== value);
      this.setValue(index > -1 ? filteredArray : [...filteredArray, value]);
    } else {
      this.setValue(value);
    }
  };

  toggleDropdown() {
    this.setState({
      showDropdown: !this.state.showDropdown,
    });
  }

  closeDropdown() {
    this.setState({
      showDropdown: false,
    });
  }

  openDropdown() {
    this.setState({
      showDropdown: true,
    });
  }

  render() {
    return (
      <div className="select">
        <fieldset
          style={{
            border: `2px solid ${this.props.style.color}`,
            width: `${this.props.style.width}px`,
          }}
        >
          <legend
            class="field-label"
            style={{
              color: ` ${this.props.style.color}`,
            }}
          >
            <span>{this.props.label}</span>
          </legend>
          <div
            id="checkboxes"
            onClick={this.toggleDropdown}
            style={{ width: `${this.props.style.width}px` }}
          >
            <label style={{ width: `${this.props.style.width}px` }}>
              {this.props.multiple
                ? this.state.value.join(", ")
                : this.state.value}
            </label>
            <ul
              className="options"
              style={{ display: this.state.showDropdown ? "block" : "none" }}
              onClick={this.openDropdown}
            >
              {this.props.data.map((d) => (
                <li
                  className={this.state.value.indexOf(d) > -1 ? "selected" : ""}
                >
                  {this.props.multiple ? (
                    <input
                      type="checkbox"
                      onChange={this.handleChange}
                      checked={this.state.value.indexOf(d) > -1}
                      value={d}
                    />
                  ) : (
                    ""
                  )}
                  <input
                    type="text"
                    value={d}
                    onSelect={this.handleChange}
                  />
                </li>
              ))}
            </ul>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Select;
