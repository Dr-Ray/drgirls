/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/Animated Woman.glb -o src/components/AnimatedWoman.jsx -r public 
*/

import React, { useEffect, useState } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function AnimatedWoman(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/Animated Woman.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group);

  const [animation, setAnimation] = useState("CharacterArmature|Run");

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => actions[animation].fadeOut(0.5);
  }, [animation]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="Casual_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual_Body_1" geometry={nodes.Casual_Body_1.geometry} material={materials.White} skeleton={nodes.Casual_Body_1.skeleton} />
            <skinnedMesh name="Casual_Body_2" geometry={nodes.Casual_Body_2.geometry} material={materials.Skin} skeleton={nodes.Casual_Body_2.skeleton} />
          </group>
          <group name="Casual_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual_Feet_1" geometry={nodes.Casual_Feet_1.geometry} material={materials.Skin} skeleton={nodes.Casual_Feet_1.skeleton} />
            <skinnedMesh name="Casual_Feet_2" geometry={nodes.Casual_Feet_2.geometry} material={materials.Grey} skeleton={nodes.Casual_Feet_2.skeleton} />
          </group>
          <group name="Casual_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual_Head_1" geometry={nodes.Casual_Head_1.geometry} material={materials.Skin} skeleton={nodes.Casual_Head_1.skeleton} />
            <skinnedMesh name="Casual_Head_2" geometry={nodes.Casual_Head_2.geometry} material={materials.Hair_Blond} skeleton={nodes.Casual_Head_2.skeleton} />
            <skinnedMesh name="Casual_Head_3" geometry={nodes.Casual_Head_3.geometry} material={materials.Hair_Brown} skeleton={nodes.Casual_Head_3.skeleton} />
            <skinnedMesh name="Casual_Head_4" geometry={nodes.Casual_Head_4.geometry} material={materials.Brown} skeleton={nodes.Casual_Head_4.skeleton} />
          </group>
          <skinnedMesh name="Casual_Legs" geometry={nodes.Casual_Legs.geometry} material={materials.Orange} skeleton={nodes.Casual_Legs.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Animated Woman.glb')
