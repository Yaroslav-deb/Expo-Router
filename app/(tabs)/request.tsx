import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { formStyles } from "../../styles/formStyle";

export default function RequestScreen() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    city: "",
  });

  const submit = () => {
    Alert.alert("Успіх", "Заявку успішно відправлено");
    setForm({ name: "", surname: "", email: "", phone: "", city: "" });
  };

  return (
    <View style={formStyles.container}>
      <Header title="Форма заявки" />
      <View style={formStyles.formWrapper}>
        <TextInput
          style={formStyles.input}
          placeholder="Ім'я"
          value={form.name}
          onChangeText={(txt) => setForm({ ...form, name: txt })}
        />
        <TextInput
          style={formStyles.input}
          placeholder="Прізвище"
          value={form.surname}
          onChangeText={(txt) => setForm({ ...form, surname: txt })}
        />
        <TextInput
          style={formStyles.input}
          placeholder="Email"
          value={form.email}
          onChangeText={(txt) => setForm({ ...form, email: txt })}
        />
        <TextInput
          style={formStyles.input}
          placeholder="Телефон"
          value={form.phone}
          onChangeText={(txt) => setForm({ ...form, phone: txt })}
        />
        <TextInput
          style={formStyles.input}
          placeholder="Місто"
          value={form.city}
          onChangeText={(txt) => setForm({ ...form, city: txt })}
        />

        <TouchableOpacity style={formStyles.button} onPress={submit}>
          <Text style={formStyles.buttonText}>Відправити</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
