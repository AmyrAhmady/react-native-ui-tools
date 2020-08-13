/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Modal,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { Header, Popup, Menu, Divider, Bubble, Rating, Tooltip } from "react-native-ui-tools";

export default class App extends React.Component {

    menuData = [
        { number: 0, label: "item 1" },
        { number: 1, label: "item 2" },
        { number: 2, label: "item 3" },
        { number: 3, label: "item 4" },
        { number: 4, label: "item 5" },
        { number: 5, label: "item 6" }
    ];

    menuData2 = [
        { id: 0, name: "item 1" },
        { id: 1, name: "item 2" },
        { id: 2, name: "item 3" },
        { id: 3, name: "item 4" },
        { id: 4, name: "item 5" },
        { id: 5, name: "item 6" }
    ];

    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            bubblePage: false,
            bubblePage2: false
        }
        this.popup = null;
    }

    renderPopupToggle(text, onPress) {
        return (
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity
                    style={{ width: '50%', padding: 10, backgroundColor: '#4F545C', elevation: 4, borderRadius: 6 }}
                    onPress={() => {
                        onPress();
                    }}
                >
                    <Text style={{ textAlign: 'center', color: 'white' }}>{text}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#36393F' }}>
                <Header
                    leftComponent={
                        <View style={{
                            flex: 1,
                            backgroundColor: '#202225',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <Text style={{ color: '#D7D5D9' }}>Left</Text>
                        </View>
                    }
                    rightComponent={
                        <View style={{
                            flex: 1,
                            backgroundColor: '#202225',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <Text style={{ color: '#D7D5D9' }}>Right</Text>
                        </View>
                    }
                    centerComponent={
                        <Text style={{ color: '#D7D5D9' }}>Header Title</Text>
                    }
                    style={{ elevation: 16, backgroundColor: '#2F3136', borderBottomWidth: 0 }}
                />
                <ScrollView >
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', color: '#D7D5D9' }}>Popup examples</Text>
                    </View>

                    <Popup
                        ref={(ref) => this.popup = ref}
                        headerComponent={
                            <View style={{ flex: 0.5, backgroundColor: '#ccc', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>my own custom header</Text>
                            </View>
                        }
                        contentComponent={
                            <View style={{ flex: 1, backgroundColor: '#006600', width: '100%', padding: '8%' }}>
                                <Text style={{ color: 'white' }}>Some text andd info here, here we go... can be some questions?</Text>
                            </View>
                        }
                        footerComponent={
                            <View style={{ flex: 0.5, backgroundColor: 'green', width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{ width: '25%', height: '80%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', elevation: 8, borderRadius: 20 }}
                                    onPress={() => alert("Pressed button1")}
                                >
                                    <Text>Button1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ width: '25%', height: '80%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', elevation: 8, borderRadius: 20 }}
                                    onPress={() => alert("Pressed button2")}
                                >
                                    <Text>Button2</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />

                    <Popup
                        onClose={() => {
                            this.setState({ popup: false })
                            return true;
                        }}
                        visible={this.state.popup}
                        title={"Just a title"}
                        content={"This is just a message wrapped in a popup component, let's make it bigger:\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    />

                    {this.renderPopupToggle('Open Popup with method', () => this.popup.show())}
                    {this.renderPopupToggle('Open Popup using state', () => this.setState({ popup: true }))}

                    <Divider color='#ccc' style={{ marginTop: 15 }} />

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', color: '#D7D5D9' }}>Menu examples</Text>
                    </View>

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 25, elevation: 4 }}>
                        <Menu
                            data={this.menuData}
                            keyExtractor={item => item.number}
                            labelExtractor={item => item.label}
                            onChange={(item) => alert(JSON.stringify(item))}
                        >
                            <View
                                style={{ width: 205, padding: 10, backgroundColor: '#4F545C', elevation: 4, borderRadius: 6 }}
                            >
                                <Text style={{ textAlign: 'center', color: 'white' }}>Click me</Text>
                            </View>
                        </Menu>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', width: 205, marginTop: 25, elevation: 4, backgroundColor: '#4F545C', elevation: 4, borderRadius: 6 }}>
                            <Menu
                                data={this.menuData2}
                            />
                        </View>
                    </View>

                    <Divider color='#ccc' style={{ marginTop: 15 }} />
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', color: '#D7D5D9' }}>Bubble examples</Text>
                    </View>

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity
                            style={{ width: '50%', padding: 10, backgroundColor: '#4F545C', elevation: 4, borderRadius: 6 }}
                            onPress={() => {
                                this.setState({ bubblePage: true });
                            }}
                        >
                            <Text style={{ textAlign: 'center', color: 'white' }}>Open page1 to Test Bubble component</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity
                            style={{ width: '50%', padding: 10, backgroundColor: '#4F545C', elevation: 4, borderRadius: 6 }}
                            onPress={() => {
                                this.setState({ bubblePage2: true });
                            }}
                        >
                            <Text style={{ textAlign: 'center', color: 'white' }}>Open page2 to Test Bubble component</Text>
                        </TouchableOpacity>
                    </View>


                    <Modal
                        visible={this.state.bubblePage}
                        onRequestClose={() => {
                            this.setState({ bubblePage: false })
                        }}
                        transparent={true}
                        animationType="slide"
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: '100%', width: '100%', backgroundColor: 'green', borderRadius: 0, elevation: 10 }}>
                                <Bubble>
                                    <Text>This is how Bubble looks like</Text>
                                </Bubble>
                            </View>
                        </View>
                    </Modal>

                    <Modal
                        visible={this.state.bubblePage2}
                        onRequestClose={() => {
                            this.setState({ bubblePage2: false })
                        }}
                        transparent={true}
                        animationType="slide"
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: '100%', width: '100%', backgroundColor: 'green', borderRadius: 0, elevation: 10 }}>
                                <Bubble>
                                    <Text>This is how Bubble looks like</Text>
                                    <Text>Test Test Test</Text>
                                    <Text>This is working...</Text>
                                </Bubble>
                            </View>
                        </View>
                    </Modal>

                    <Divider color='#ccc' style={{ marginTop: 15 }} />
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', color: '#D7D5D9' }}>Rating examples</Text>
                    </View>

                    <Rating
                        starColor='#ED8A19'
                        reviewColor='#43B581'
                    />

                    <Divider color='#ccc' style={{ marginTop: 15 }} />

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', color: '#D7D5D9' }}>Tooltip examples</Text>
                    </View>

                    <View style={{ flexDirection: 'row-reverse', marginHorizontal: 10, marginTop: 15 }}>
                        <Tooltip popover={<Text>Tooltip info here</Text>}>
                            <Text style={{ color: '#E75242', fontWeight: 'bold' }}>Right Tooltip ❤</Text>
                        </Tooltip>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15, marginHorizontal: 10 }}>
                        <Tooltip popover={<Text>Tooltip info here</Text>}>
                            <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#4F545C', borderRadius: 7 }}>
                                <Text style={{ color: '#D7D5D9' }}>Left Tooltip</Text>
                            </View>
                        </Tooltip>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginHorizontal: 10, marginTop: 15 }}>
                        <Tooltip popover={<Text>Tooltip info here</Text>}>
                            <Text style={{ color: '#1D8CCF', fontWeight: 'bold' }}>🎉 Center Tooltip 😃</Text>
                        </Tooltip>
                    </View>

                    <Divider color='#ccc' style={{ marginTop: 15 }} />

                </ScrollView >
            </View>

        );
    }

};
