import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Item from './Item';
import {connect} from 'react-redux';
class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => <Item style={styles.item} text={item.text} />}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  data: state.todos,
});
export default connect(mapStateToProps)(ListItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
