import { useSelector } from "react-redux";
import { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import CalendarModal from "./CalendarModal";
import { RootState } from "../../store/store";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const { date } = useSelector((state: RootState) => state.date);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <Pressable
        style={styles.calendar}
        onPressIn={() => {
          setModalVisible((visible) => !visible);
        }}
      >
        <Text style={styles.calendarText}>{`${
          days[date.day()]
        }, ${date.date()}.${date.month() + 1}`}</Text>
        <CalendarModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: "#05666C",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarText: {
    fontWeight: "700",
    color: "white",
  },
});

export default Calendar;
