import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types'
export default class GraduationUnit extends Component {
  static propTypes = {
    completeBorder: PropTypes.bool,
    horizontal: PropTypes.bool.isRequired,
    labelColor: PropTypes.string,
    labelWrapperFlex: PropTypes.number,
    lineColor: PropTypes.string,
    style: PropTypes.style,
    unitFlex: PropTypes.number,
    value: PropTypes.number,
  };

  static defaultProps = {
    horizontal: false,
  };

  getStyles() {
    const {
      completeBorder,
      horizontal,
      labelColor,
      labelWrapperFlex,
      lineColor,
      unitFlex,
    } = this.props;

    return styles({
      completeBorder,
      horizontal,
      labelColor,
      labelWrapperFlex,
      lineColor,
      unitFlex,
    });
  }

  renderLabel() {
    const {
      value,
    } = this.props;

    return (
      <View style={this.getStyles().labelWrapper}>
        <Text style={this.getStyles().label}>
          {value}
        </Text>
      </View>
    );
  }

  render() {
    const {
      horizontal,
      style,
    } = this.props;

    return (
      <View style={[this.getStyles().container, style]}>
        {horizontal ? null : this.renderLabel()}
        <View style={this.getStyles().unit} />
        {horizontal ? this.renderLabel() : null}
      </View>
    );
  }
}
