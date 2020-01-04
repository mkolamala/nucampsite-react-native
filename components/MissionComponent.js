import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

function Mission(){
    return(
     <ScrollView>
         <Card title="Our Mission">
          <Text>
              We present a curated database of the best campsites in the vast woods and backcountry of the World Wide web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources.
          </Text>
         </Card>
     </ScrollView>
    );
}

export default Mission;