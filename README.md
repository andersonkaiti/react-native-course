# O que é React Native?

React Native é um `framework open-source` para construção de aplicações nativas Android e iOS utilizando o React. Ele permite o uso de JavaScript para acessar APIs específicas da plataforma, como câmera e notificações, e empregar `componentes React` para definr a aparência e comportamento da interface de usuário.

# Por que React Native?

Aplicações iOS requerem Swift ou Objective-C, enquanto aplicações Android requerem Java ou Kotlin. Com a distribuição de usuários sendo 31% para iOS e 68% para Android, normalmente é necessário desenvolver aplicações utilizando tecnologias diferentes.

Com React Native, é possível criar uma aplicação que funciona perfeitamente em `ambas as plataformas`.

# Criação do primeiro projeto

Para criar uma aplicação, basta executar o seguinte CLI.

```
npx create-expo-app@latest hello-world
```

Outra alternativa é utilizando a flag `--template blank@latest`, que cria uma aplicação em branco.

```
npx create-expo-app@latest hello-world --template blank@latest
```

# Core Components

O React Native fornece uma coleção de componentes essenciais e pré-construídos conhecidos como `Core Components`. Ao contrário da forma como as UIs são construídas com React.js, os Core Components `precisam ser importados` para uso.

## View

Uma View é um componente fundamental no React Native que serve como um bloco de construção para criar UIs e é como um `container na tela` que pode exibir textos, imagens ou responder a entradas de usuário e que suporta o uso de flexbox, styling, touch handling e controles de acessibilidade, semelhante à tag div no HTML. Em tempo de execução, o React Native gera as Views correspondentes para Android e iOS.

O componente View apenas `ocupa o espaço dos filhos`, então para fazer a View ocupar o espaço inteiro, é necessário adicionar a propriedade de estilo `flex`.

```
<View
    style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
></View>
<View
    style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
></View>
```

## Text

É um componente que exibe texto, suporta aninhamento, styling e touch handling. Dependendo da plataforma-alvo, o React Native traduz o componente ou para UITextView (iOS), TextView (Android) ou p (web).

```
<Text>
    <Text style={{ color: "white" }}>Hello</Text>, World!
</Text>
```

## Image

O componente Image permite exibir uma variedade de tipos de imagens, incluindo imagens estáticas, externas (a partir de network requests) e do disco local.

O React Native traduz o componente Image para o seu homólogo de cada plataforma, como UIImageView (iOS), ImageView (Android) e img (web).

```
<Image source={logoImg} style={{ width: 300, height: 300 }} />
```

Para adicionar uma imagem remota, é necessário adicionar um objeto dentro de `source` com a `propriedade uri`.

```
<Image
    source={{ uri: "https://picsum.photos/300" }}
    style={{ width: 300, height: 300 }}
/>
```

Para definir a imagem como background da aplicação, basta utilizando o componente ImageBackground.

```
<ImageBackground style={{ flex: 1 }} source={logoImg}>
    <Text>IMAGE TEXT</Text>
</ImageBackground>
```

## ScrollView

Embora a View seja parecida com a div, ela não permite o `scroll automaticamente`. O componente ScrollView envolve as funcionalidades de rolagem específica da plataforma, mas requer uma altura definida para funcionar.

```
<ScrollView>
    <Image source={logoImg} style={{ width: 300, height: 300 }} />
    <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        ducimus inventore fugiat aliquid vel vero dicta sit. Iure quas
        suscipit dignissimos, vero sit quos temporibus iusto, dolorem
        voluptates odio aperiam? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Ipsum iste consectetur libero deleniti! Ut
        exercitationem error ipsam ex, enim amet, minima sequi fugiat deserunt
        sunt earum eligendi dignissimos cupiditate. Libero! Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Inventore dolor vero ullam a
        animi illum provident. Est atque, quas itaque, molestias ut cupiditate
        perferendis unde quod officiis delectus natus voluptate!
    </Text>
    <Image source={logoImg} style={{ width: 300, height: 300 }} />
</ScrollView>
```

## Button

O componente Button permite que os usuários acionem ações ao clicar. Ao contrário do HTML, no React Native o texto não tem texto interno (entre as tags de abertura e fechamento) e nem tag de fechamento. Além disso, o componente Button tem renderização específica para cada plataforma.

```
<Button
    title="Press"
    onPress={() => console.log("Button pressed")}
    color="midnightblue"
    disabled
/>
```

## Pressable

Pressable é um `wrapper component` que detecta vários estágios de interação de clique em seus filhos, ou seja, caso algum componente necessite executar algo ao ser clicado, basta `encapsulá-lo em um componente Pressable`. Além disso, é possível criar um botão customizado usando o Pressable.

```
<Pressable onPress={() => console.log("Image pressed")}>
    <Image source={logoImg} style={{ width: 300, height: 300 }} />
</Pressable>
<Pressable onPress={() => console.log("Text pressed")}>
    <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        ducimus inventore fugiat aliquid vel vero dicta sit. Iure quas
        suscipit dignissimos, vero sit quos temporibus iusto, dolorem
        voluptates odio aperiam? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Ipsum iste consectetur libero deleniti! Ut
        exercitationem error ipsam ex, enim amet, minima sequi fugiat deserunt
        sunt earum eligendi dignissimos cupiditate. Libero! Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Inventore dolor vero ullam a
        animi illum provident. Est atque, quas itaque, molestias ut cupiditate
        perferendis unde quod officiis delectus natus voluptate!
    </Text>
</Pressable>
```

Ele aceita as seguintes props de clique:

- onPressIn é chamado quando o clique é ativado.
- onLongPress é acionado quando o clique é mantido por mais de 500ms.
- onPressOut é chamado quando o gesto de clique é desativado.

## Modal

Modal é uma `tela que sobrepõe o conteúdo do app` para fornecer alguma informação importante ou levar o usuário a tomar uma decisão.

A prop `onRequestClose` é chamada quando o usuário clica no `botão de voltar do dispositivo`.

```
<Button
    title="Press"
    onPress={() => setIsModalVisible(true)}
    color="midnightblue"
/>

<Modal
    visible={isModalVisible}
    onRequestClose={() => setIsModalVisible(false)}
    animationType="slide"
>
    <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
        <Text>Modal content</Text>
        <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
        />
    </View>
</Modal>
```

## StatusBar

O componente StatusBar permite que você controle o status bar da aplicação, que é a área, normalmente no topo da tela, que exibe o horário atual, informações de Wi-Fi e de rede, nível de bateria e outros ícones de status.

```
<StatusBar
    backgroundColor="lightgreen"
    barStyle="dark-content"
/>
```

## ActivityIndicator

O componente ActivityIndicator exibe um `indicador de carregamento circular` e é usado para informar usuários sobre o status de processos em andamento, como o carremento do app, a submissão de formulário ou salvamento de alterações.

A prop animating define a visibilidade do componente, sendo possível, dessa forma, adicionar uma lógica de carregamento.

```
<ActivityIndicator />
<ActivityIndicator size="large" />
<ActivityIndicator size="large" color="midnightblue" />
<ActivityIndicator size="large" color="midnightblue" animating={false} />
```

## Alert

O Alert lança um `diálogo de alerta` com título e mensagens especificado. Opcionalmente, também é possível especificar uma lista de botões.

```
<Button title="Alert" onPress={() => Alert.alert("Invalid data!")} />
<Button
    title="Alert 2"
    onPress={() => Alert.alert("Invalid data!", "DOB incorrect")}
/>
<Button
    title="Alert 3"
    onPress={() =>
        Alert.alert("Invalid data!", "DOB incorrect", [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel pressed"),
            },
            {
                text: "OK",
                onPress: () => console.log("OK pressed"),
            },
        ])
    }
/>
```

## Custom Components

Além disso, é possível criar os próprios componentes exportando uma função que retorna jsx:

```
import { View, Text } from "react-native";

export default function Greet({ name }) {
    return (
        <View>
        <Text>Hello, {name}</Text>
        </View>
    );
}
```

# Styling React Native Apps

O React Native não utiliza CSS para estilização, mas sim `JavaScript`. Os nomes dos estilos são escritos em `Camel Case`, como: backgroundColor em vez de background-color.

## Formas de estilização

- `Inline` utiliznado objetos na prop style.
- `StyleSheet API`, que permite criar várias estilos reutilizáveis em um só lugar usando o `método create`. De forma semelhante, é possível criar o estilo com um objeto normal, mas ele não terá o autocomplete.

## Box Model

O React Native segue as mesmas propriedades que o Box Model do CSS.

O width e height são utilizados para definir a dimensão de um componente, sendo que as dimensões não contêm unidades e os valores apenas representam pixels. Portanto, não é necessário especificar unidades com rem ou px.

Mas é possível especificar valores em porcentagem quando os componentes pai têm dimensões definidas.

## CSS Inheritance

A herança de estilo funciona no CSS, mas não no React Native.

Ainda que o sistema de herança seja mais fraco, ao aninhar um texto em outro, o estilo do texto pai é herdado pelo filho.

## Layout com Flexbox

O Flexbox é um modelo de layou de uma dimensão utilizado para organizar elementos dentro de um container.

Também é possível controlar o espaçamento e alinhamento dos itens dentro de um container.

O Flexbox consiste em duas principais entidades:

- Flex container.
- Flex items.

```
<View> ────────────────────> Flex container
    <View>Item 1</View> ───> Flex items
</View>
```

Eixos:

- Eixo principal (main).
- Eixo transversal (cross).

```
         cross
       ─────────>
     │
     │
main │
     │
     ↓
```

## flex

A propriedade flex define quanto uma View vai ocupar a tela ao longo do eixo principal.

Ele oculta um valor inteiro maior ou igual a 0, indicando a fração de espaço que o componente deve ocupar.

## flexDirection

A propriedade flexDirection estabelece o eixo principal, o que determinada como os flex items estão colocados dentro do container.

Por padrão, o eixo principal vai do topo para baixo.

Mas alterando o flexDirection, podemos mudar como os items são posicionados.

## justifyContent

O justifyContent define o alinhamento ao longo do eixo principal.

## alignItems

O alignItems define o comportamento padrão para dispor os flex items ao longo do eixo transversal do container.

Funciona de forma similar ao justifyContent, mas na direção perpendicular.

stretch é o valor padrão.

Baseline é a linha onde as letras se sustentam. O alignItems: "baseline" faz com que cada texto dentro de cada item esteja alinhado.

```
┌────────┐
│        ├────────┬────────┐
│ Base 1 │ Base 2 │ Base 3 │
│        ├────────┴────────┘
└────────┘
```

## alignSelf

O alignSelf é aplicado em itens individuais, permitindo controlar o alinhamento de cada item de forma independente.

O valor padrão do alignSelf é "auto", o que herda o valor do alignItems do container pai.

## flexWrap

O flexWrap permite controlar como o flex item se comporta quando está limitado ao espaço do container.

## alignContent

A propriedade alignContent alinha linhas de conteúdo ao longo eixo transversal.

## gap

As propriedades gap permitem gerenciar o espaçamento entre linhas e colunas.

- rowGap aplica entre as linhas.
- columnGap aplica entre as colunas.
- gap aplica tanto entre linhas como entre colunas.

## flexBasis

A propriedade flexBasis determina o tamanho inicial de um flex item antes que qualquer espaço extra no container seja distribuído.

É uma alternativa para as propriedades height e width.

Ao utilizar o flexBasis com flex, a altura é distribuída proporcionalmente, mas não acontece o mesmo ao utilizar a propriedade height.

O flexBasis define a largura inicial do item se o flexDirection do container for row.

## flexShrink

O flexShrinkm determina como os filhos dentro de um container encolhem ao longo do eixo principal quando o tamanho combinado deles excedem o tamanho do container.

Todo flex item tem o valor do flexShrink definido como 0 por padrão.

## flexGrow

O flexGrow determina quanto espaço um item deveria ocupar dentro de um flex container quando tem espaço extra disponível.

Todo flex item tem o valor do flexGrow definido como 0.

### flex vs flexGrow

Quando o flex é definido com um número positivo, ele é equivalente ao flexGrow.

O flex implicitamente define o flexShrink em 1 o flexBasis em 0.

```
flex: <positive number>
flexGrow: <positive number>, flexShrink: 1, flexBasis: 0
```

# Layout Relativo e Absoluto

Os layouts são baseados na propriedade position, que define como um elemento é posicionado dentro de um container pai.

- relative.
- absolute.

## Relative layout

Neste layout, um elemento é posicionado de acordo com o fluxo normal do layout.

Ele permanece na posição original e pode ser deslocado da posição original usando os valores top, right, bottom e left.

## Absolute Layout

Neste layout, o elemento não participa do fluxo normal do layout, em vez disso, ele é disposto independentemente dos seus irmãos.

O posicionamento é determinado pelos valores top, right, bottom e left que especificam as coordenadas em relação ao seu container pai.

# Dimensions API

Para tornar a aplicação responsiva, a Dimensions API, que fornece acesso ao tamanho do dispositivo, pode ser utilizada.

```
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
```

O problema é que ela não atualiza as mudanças nas dimensões automaticamente. Portanto, é necessário utilizar useState, useEffect e adicionar um ouvinte de mudança no Dimensions.

```
const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
});

useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
        setDimensions({ window });
    });

    return () => subscription?.remove();
});

const { window } = dimensions;
const windowWidth = window.width;
const windowHeight = window.height;
```

No entanto, existe outra solução menos verbosa, que é utilizando o useWindowDimensions fornecido pelo React Native.

```
const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;
```

# SafeAreaView

Renderiza o conteúdo dentro do limite de área segura.

```
<SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.text}>Welcome</Text>
        </View>
    </View>
</SafeAreaView>
```

# Platform specific code

Ao desenvolver um aplicativo multiplataforma, maximizar a reusabilidade do código é uma prioridade. Há situações em que é necessário adaptar seu código a plataformas específicas.

O React Native fornece duas abordagens para organizar e separar o código específico da plataforma.

- Platform module.
- Platform-specific file extensions.

```
paddingTop: Platform.OS === "android" ? 25 : 0
```

```
..Platform.select({
    ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
    },
    android: {
        color: "blue",
        fontSize: 30,
    },
}),
```

# FlatList

O componente FlatList renderiza apenas o item atualmente na View, fazendo dele altamente performático para listas longas.

- data: source.
- renderItem: função responsável por renderizar cada item da lista.
- keyExtractor: a key que se utiliza assim como no .map.
- ItemSeparatorComponent: renderiza um componente entre cada item na lista excluíndo o topo e a parte inferior da tela.
- ListEmptyComponent: aceita um componente React e o renderiza quando a lista estiver vazia.
- ListHeaderComponent: aceita um componente React e o renderiza como um header da lista.
- ListFooterComponent: aceita um componente React e o renderiza como um footer da lista.

```
<FlatList
    data={pokemonList}
    renderItem={({ item }) => {
        console.log(item.id);

        return (
            <View style={styles.card} key={item.id}>
            <Text style={styles.cardText}>{item.type}</Text>
            <Text style={styles.cardText}>{item.name}</Text>
            </View>
        );
    }}
    // horizontal={true}
    keyExtractor={(item) => item.id.toString()}
    ItemSeparatorComponent={<View style={{ height: 16 }} />}
    ListEmptyComponent={
    <Text style={styles.listEmptyText}>No items found</Text>
    }
    ListHeaderComponent={
    <Text style={styles.headerText}>Pokemon List</Text>
    }
    ListFooterComponent={
    <Text style={styles.footerText}>End of list</Text>
    }
/>
```

# SectionList

É um componente de alto desempenho projetado para renderizar listas seccionadas.

```
<SectionList
    sections={groupedPokemonList}
    renderItem={({ item }) => {
        return (
            <View style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
            </View>
        );
    }}
    renderSectionHeader={({ section }) => (
    <Text style={styles.sectionHeaderText}>{section.type}</Text>
    )}
    ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
/>
```

# Inputs no React Native vs. Web

No desenvolvimento, existem vários elemento HTML ao nosso dispor para capturar entradas de usuário. Enquanto isso, o React Native apenas fornece o TextInput e o Switch.

O Expo espande o kit de ferramentas, oferecendo componentes adicionais como checkboxes e date pickers atráves do Expo SDK.

# Formulários no React Native

- Gerenciando o estado dos formulários: controlando os dados dinâmicos dentro do formulário.
- Lidar com validação de formulários: assegurando a integridade e validade dos inputs de usuário.
- Exibindo mensagens de validação: comunicando o resultado da validação para o usuário.
- Enviando os dados do formulário: enviando a informação coletada para onde ela precisa ir.

# TextInput

Ele permite que os usuários insiram texto e outros dados em seu aplicativo, aceitando props parecidas com o input do HTML.

- value: valor de entrada.
- onChangeText: função que altera o valor.
- placeholder: fornece ao usuário um texto com a entrada esperada antes do usuário começar a escrever.
- secureTextEntry: permite que o valor do input seja mascarado e apareça como pontos.
- keyboardType: especifica o tipo de teclado que aparece quando o usuário interage com o input de texto.

```
<TextInput
    style={styles.input}
    value={name}
    onChangeText={setName}
    placeholder="email@example.com"
    secureTextEntry
    keyboardType="numeric"
/>
```

# Switch

O componente Switch serve como uma valiosa ferramenta para integrar toggles na UI.

- value: valor atual.
- onValueChange: função que altera o valor.
- trackColor: recebe um objeto que define a cor do toggle dependendo se é true ou false.
- thumbColor: define a cor da bola do switch.

```
<Switch
    value={isDarkMode}
    onValueChange={() => setIsDarkMode((previousState) => !previousState)}
    trackColor={{ false: "#767577", true: "lightblue" }}
    thumbColor="#f4f3f4"
/>
```

# Criando formulário

No iOS, quando o usuário interage com um input de texto, o teclado sobrepõe o input. Para resolver isso, basta cobrir o formulário com o componente <KeyboardAvoidingView>.

- behavior="padding": assegura que o componente aumentará o padding traseiro de acordo com a altura do teclado.

# Recarregando a lista

```
<FlatList
    refreshing={refreshing}
    onRefresh={handleRefresh}
/>
```

# Navigation

É o mecanismo que permite aos usuários navegar por diferentes telas, acessar recursos e, em geral, usar seu aplicativo de forma eficaz.

Para lidar com a navegação, é possível utilizar a biblioteca de navegação React. O Expo tem o seu próprio recurso natio de roteamento exclusivo para projetos Expo.

# React Navigation

Fornece uma variedade de navegadores como o Stack, o Drawer e o Tab navigators.

- O Stack Navigator fornece uma forma do aplicativo transitar entre telas e cada nova tela é colocada no topo da pilha,
- O Drawer Navigator renderiza uma gaveta de navegação no lado da tela que pode ser aberta ou fechada com gestos.
- Um Tab Navigator na parte inferior da tela permite que o usuário alterne facilmente entre diferentes rotas.

# Stack Navigator

Cada tela é empilhada sobre a anterior.

Para navegar entre as telas, é necessário extrair a `prop navigation` do componente ou utilizar o `hook useNavigation` e extrair o objeto navigation dele.

```
export default function HomeScreen({ navigation }) {

}
```

```
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation, route }) {
  const navigation = useNavigation();
}
```

Para passar dados entre telas, basta adicionar um objeto comp parâmetro do navigation e coletar o valor com a prop route.

```
navigation.navigate("About", {
    name: "Anderson",
})
```

```
export default function AboutScreen({ route, navigation }) {
  const { name } = route.params;
}
```

# Drawer Navigator

Introduz um menu oculto que desliza o conteúdo de ambos os lados da tela. É benéfico quando um aplicativo possui múltiplas seções principais e requerem uma estrutura de navegação organizada.

```
<Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
<Button title="Settings" onPress={() => navigation.jumpTo("Settings")} />
```

# Tab Navigation

Oferece uma maneira de navegar entre diferentes telas clicando em uma aba que normalmente é exibida na parte inferior da tela.