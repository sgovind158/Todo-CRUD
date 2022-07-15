import { Box, Flex,Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../Redux/AppReducer/action";

const HomePage = () => {
 
    const tasks = useSelector((state)=>state.AppReducer.tasks)
    const dispatch = useDispatch()
    const getTasksHandler = useCallback(()=>{
        dispatch(getTasks())

    },[dispatch])

    useEffect(()=>{
        if(tasks.length === 0){
            getTasksHandler()
        }
    },[getTasksHandler,tasks.length])
  return (
    <Box border="1px solid green" width="100%">
      <Flex justifyContent={"space-around"}>
        {/* Todo */}

        <Box border={"1px solid black"} width="250px" height={"95vh"}>
          <Box>
            <Text textAlign="center">TODO</Text>
          </Box>
        </Box>

        {/* In - Progress */}
        <Box border={"1px solid black"} width="250px" height={"95vh"}>
          <Box>
            <Text textAlign="center">In-Progress</Text>
          </Box>
        </Box>

           {/* Done */}
        <Box border={"1px solid black"} width="250px" height={"95vh"}>
          <Box>
            <Text textAlign="center">Done</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
