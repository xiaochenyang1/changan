<template>
  <div class="page flex-col">
    <div class="block_1 flex-col">
      <div class="section_1 flex-col">
        <div class="group_1 flex-col">
          <div class="section_2 flex-row justify-between">
            <div
              v-for="line in productionLines"
              :key="line.id"
              class="tab-item flex-col align-center justify-center"
              :style="{
                backgroundImage: `url(${activeLine === line.id ? xuanzhongBg : weixuanBg})`,
              }"
              @click="activeLine = line.id"
            >
              <span class="tab-text" :class="{ 'tab-text--active': activeLine === line.id }">{{
                line.label
              }}</span>
            </div>
          </div>
          <div class="section_3 flex-row justify-between">
            <div class="group_2 flex-col">
              <img class="text_7" referrerpolicy="no-referrer" src="./assets/img/chanliang.png" />
              <div class="box_1 flex-row justify-between">
                <div class="box_2 flex-col"></div>
                <span class="text_8">产量</span>
              </div>
              <div class="box_3 flex-row justify-between">
                <div class="text-wrapper_7 flex-col">
                  <span class="text_9">100</span>
                  <span class="text_10">75</span>
                  <span class="text_11">50</span>
                  <span class="text_12">25</span>
                  <span class="text_13">0</span>
                </div>
                <div class="group_3 flex-col justify-between">
                  <div class="text-wrapper_8 flex-row">
                    <span class="text_14">92</span>
                    <span class="text_15">92</span>
                    <span class="text_16">92</span>
                  </div>
                  <div class="box_4 flex-row">
                    <div class="group_4 flex-col justify-between">
                      <span class="text_17">75</span>
                      <div class="block_5 flex-row justify-between">
                        <img
                          class="image_1"
                          referrerpolicy="no-referrer"
                          src="./assets/img/SketchPng16241506c46ac2cf3777e07aaeee623aca99864fe08dc9fd5050af8fd81219d1.png"
                        />
                        <div class="image-wrapper_1 flex-col">
                          <img
                            class="thumbnail_1"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPngb0530a4b01ad0f0520a549aee86edf35ae182ec2cb1582366a90a8d6c784ab69.png"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      class="image_2"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng4d1771beade70e246a0f1df47486981bfd61b7de512fd924c76c978b0385a655.png"
                    />
                    <div class="image-wrapper_2 flex-col">
                      <img
                        class="thumbnail_2"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPngb0530a4b01ad0f0520a549aee86edf35ae182ec2cb1582366a90a8d6c784ab69.png"
                      />
                    </div>
                    <div class="group_5 flex-col justify-between">
                      <span class="text_18">80</span>
                      <div class="box_5 flex-row justify-between">
                        <img
                          class="image_3"
                          referrerpolicy="no-referrer"
                          src="./assets/img/SketchPng02f433e959fc69574d2199ce2b6bb8ba1ea929148233cf2f9d8fb536112c219e.png"
                        />
                        <div class="image-wrapper_3 flex-col">
                          <img
                            class="thumbnail_3"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPngb0530a4b01ad0f0520a549aee86edf35ae182ec2cb1582366a90a8d6c784ab69.png"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      class="image_4"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng4d1771beade70e246a0f1df47486981bfd61b7de512fd924c76c978b0385a655.png"
                    />
                    <div class="image-wrapper_4 flex-col">
                      <img
                        class="thumbnail_4"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPngb0530a4b01ad0f0520a549aee86edf35ae182ec2cb1582366a90a8d6c784ab69.png"
                      />
                    </div>
                    <div class="group_6 flex-col justify-between">
                      <span class="text_19">75</span>
                      <div class="block_6 flex-row justify-between">
                        <img
                          class="image_5"
                          referrerpolicy="no-referrer"
                          src="./assets/img/SketchPng16241506c46ac2cf3777e07aaeee623aca99864fe08dc9fd5050af8fd81219d1.png"
                        />
                        <div class="image-wrapper_5 flex-col">
                          <img
                            class="thumbnail_5"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPngb0530a4b01ad0f0520a549aee86edf35ae182ec2cb1582366a90a8d6c784ab69.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="group_7 flex-col justify-between">
                      <span class="text_20">75</span>
                      <div class="section_4 flex-row justify-between">
                        <img
                          class="image_6"
                          referrerpolicy="no-referrer"
                          src="./assets/img/SketchPng16241506c46ac2cf3777e07aaeee623aca99864fe08dc9fd5050af8fd81219d1.png"
                        />
                        <div class="image-wrapper_6 flex-col">
                          <img
                            class="thumbnail_6"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPngb0530a4b01ad0f0520a549aee86edf35ae182ec2cb1582366a90a8d6c784ab69.png"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      class="image_7"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng4d1771beade70e246a0f1df47486981bfd61b7de512fd924c76c978b0385a655.png"
                    />
                    <div class="image-wrapper_7 flex-col">
                      <img
                        class="thumbnail_7"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPngb0530a4b01ad0f0520a549aee86edf35ae182ec2cb1582366a90a8d6c784ab69.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-wrapper_9 flex-row">
                <span class="text_21">6/23</span>
                <span class="text_22">6/24</span>
                <span class="text_23">6/25</span>
                <span class="text_24">6/26</span>
                <span class="text_25">6/27</span>
                <span class="text_26">6/28</span>
                <span class="text_27">6/29</span>
              </div>
            </div>
            <div class="group_8 flex-col">
              <img class="text_28" referrerpolicy="no-referrer" src="./assets/img/ftr.png" />
              <div class="block_7 flex-row justify-between">
                <div class="text-wrapper_10 flex-col">
                  <span class="text_29">100%</span>
                  <span class="text_30">75%</span>
                  <span class="text_31">50%</span>
                  <span class="text_32">25%</span>
                  <span class="text_33">0%</span>
                </div>
                <div class="box_6 flex-col">
                  <div class="section_5 flex-row">
                    <div class="section_6 flex-col">
                      <div class="text-wrapper_11 flex-row justify-between">
                        <span class="text_34">75%</span>
                        <span class="text_35">70%</span>
                      </div>
                      <div class="text-wrapper_12 flex-row"><span class="text_36">60%</span></div>
                      <div class="text-wrapper_13 flex-row"><span class="text_37">47%</span></div>
                    </div>
                    <span class="text_38">69%</span>
                    <span class="text_39">54%</span>
                  </div>
                  <span class="text_40">98%</span>
                </div>
              </div>
              <div class="text-wrapper_14 flex-row justify-between">
                <span class="text_41">6/1</span>
                <span class="text_42">6/2</span>
                <span class="text_43">6/3</span>
                <span class="text_44">6/4</span>
                <span class="text_45">6/5</span>
                <span class="text_46">6/6</span>
                <span class="text_47">6/7</span>
              </div>
              <img
                class="image_8"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng9778f92ff5597afd7fcbd2dfa89030b8d5909ae3645f8bc7b563573d94375200.png"
              />
            </div>
          </div>
          <div class="section_7 flex-row justify-between">
            <div class="box_7 flex-col">
              <div class="section_8 flex-row justify-between">
                <div class="text-wrapper_15 flex-col">
                  <span class="text_48">100</span>
                  <span class="text_49">75</span>
                  <span class="text_50">50</span>
                  <span class="text_51">25</span>
                  <span class="text_52">0</span>
                </div>
                <div class="group_9 flex-col">
                  <div class="box_8 flex-col">
                    <div class="box_9 flex-col">
                      <div class="text-wrapper_16 flex-row justify-between">
                        <span class="text_53">75</span>
                        <span class="text_54">70</span>
                        <span class="text_55">69</span>
                      </div>
                      <div class="text-wrapper_17 flex-row justify-between">
                        <span class="text_56">54</span>
                        <span class="text_57">60</span>
                      </div>
                      <div class="text-wrapper_18 flex-row"><span class="text_58">47</span></div>
                    </div>
                  </div>
                  <span class="text_59">98</span>
                </div>
              </div>
              <div class="text-wrapper_19 flex-row">
                <span class="text_60">9:00</span>
                <span class="text_61">10:00</span>
                <span class="text_62">11:00</span>
                <span class="text_63">12:00</span>
                <span class="text_64">13:00</span>
                <span class="text_65">14:00</span>
                <span class="text_66">15:00</span>
              </div>
              <img
                class="image_9"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngf9c0c0ee9f3eef2ea13bb0246eaeeb14b54888685a9346703ddfb0f3cb68f8b7.png"
              />
            </div>
            <div class="box_10 flex-col">
              <img class="text_67" referrerpolicy="no-referrer" src="./assets/img/c1000.png" />
              <div class="image-text_1 flex-row justify-between">
                <div class="group_10 flex-col"></div>
                <span class="text-group_1">不良数量</span>
              </div>
              <div class="group_11 flex-row justify-between">
                <div class="text-wrapper_20 flex-col">
                  <span class="text_68">100</span>
                  <span class="text_69">75</span>
                  <span class="text_70">50</span>
                  <span class="text_71">25</span>
                  <span class="text_72">0</span>
                </div>
                <div class="section_9 flex-col">
                  <img
                    class="image_10"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng113e57969e67995b0d428b848461d35881076fd8f44d803cb02459fe007310ee.png"
                  />
                  <span class="text_73">80</span>
                  <div class="text-wrapper_21 flex-row">
                    <span class="text_74">75</span>
                    <span class="text_75">75</span>
                    <span class="text_76">75</span>
                  </div>
                  <img
                    class="image_11"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng9c1197d79c10890a482bf15aa8b811ff53fadd49701a57d474518e5437a5f165.png"
                  />
                  <img
                    class="image_12"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng9c1197d79c10890a482bf15aa8b811ff53fadd49701a57d474518e5437a5f165.png"
                  />
                  <img
                    class="image_13"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPnga0d373f155bd971491c9c7d8f3a1b989dce4e010b4749f7058800ca01f513f72.png"
                  />
                  <img
                    class="image_14"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngcf3b9256378b027b6657b808286cb55b4d07c76ab6fe90eda53fd5ef3c63614d.png"
                  />
                </div>
                <img
                  class="image_15"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPnge44e2387fc3dbbe61c02c63e49449abd474ca78f0ba6892bdb25f8c8bd176bb8.png"
                />
              </div>
              <div class="text-wrapper_22 flex-row">
                <span class="text_77">6/23</span>
                <span class="text_78">6/24</span>
                <span class="text_79">6/25</span>
                <span class="text_80">6/26</span>
                <span class="text_81">6/27</span>
                <span class="text_82">6/28</span>
                <span class="text_83">6/29</span>
              </div>
              <img
                class="image_16"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng99ee84b7a728c6f20e6718a25da0c1a9b58f7d29a7d59cdcacb7e01ffc716d61.png"
              />
              <div class="image-wrapper_8 flex-col">
                <img
                  class="thumbnail_8"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng986f2debb60e871d5918cc72285db4de8b9bbfa9212c313e34f26ade7f3d6cf7.png"
                />
              </div>
              <span class="text_84">92</span>
              <img
                class="image_17"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngf003d89bb627b4b385a475d49f2090507cf4ac2fc40ce382727ea50b24816811.png"
              />
              <img
                class="image_18"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng99ee84b7a728c6f20e6718a25da0c1a9b58f7d29a7d59cdcacb7e01ffc716d61.png"
              />
              <div class="image-wrapper_9 flex-col">
                <img
                  class="thumbnail_9"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng986f2debb60e871d5918cc72285db4de8b9bbfa9212c313e34f26ade7f3d6cf7.png"
                />
              </div>
              <div class="image-wrapper_10 flex-col">
                <img
                  class="thumbnail_10"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng986f2debb60e871d5918cc72285db4de8b9bbfa9212c313e34f26ade7f3d6cf7.png"
                />
              </div>
              <span class="text_85">92</span>
              <img
                class="image_19"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng08862ef67c027126ebf7d29127ea3a7864c9a30550437e1d7876292a9de3a460.png"
              />
              <img
                class="image_20"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng08862ef67c027126ebf7d29127ea3a7864c9a30550437e1d7876292a9de3a460.png"
              />
              <img
                class="image_21"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng08862ef67c027126ebf7d29127ea3a7864c9a30550437e1d7876292a9de3a460.png"
              />
              <div class="image-wrapper_11 flex-col">
                <img
                  class="thumbnail_11"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng986f2debb60e871d5918cc72285db4de8b9bbfa9212c313e34f26ade7f3d6cf7.png"
                />
              </div>
              <div class="image-wrapper_12 flex-col">
                <img
                  class="thumbnail_12"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng986f2debb60e871d5918cc72285db4de8b9bbfa9212c313e34f26ade7f3d6cf7.png"
                />
              </div>
              <div class="image-wrapper_13 flex-col">
                <img
                  class="thumbnail_13"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng986f2debb60e871d5918cc72285db4de8b9bbfa9212c313e34f26ade7f3d6cf7.png"
                />
              </div>
              <div class="image-wrapper_14 flex-col">
                <img
                  class="thumbnail_14"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng986f2debb60e871d5918cc72285db4de8b9bbfa9212c313e34f26ade7f3d6cf7.png"
                />
              </div>
              <span class="text_86">92</span>
              <img
                class="image_22"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPnge72963e4f5d64335bad5b0d430ff722ab26df53d0a267e91ef16860178cc29a3.png"
              />
            </div>
          </div>
          <div class="section_10 flex-row justify-between">
            <div class="box_11 flex-col">
              <div class="text-wrapper_23 flex-row">
                <img class="text_87" referrerpolicy="no-referrer" src="./assets/img/tingxianshichang.png" />
              </div>
              <div class="box_12 flex-row">
                <div class="text-wrapper_24 flex-col">
                  <span class="text_88">100</span>
                  <span class="text_89">75</span>
                  <span class="text_90">50</span>
                  <span class="text_91">25</span>
                  <span class="text_92">0</span>
                </div>
                <div class="group_12 flex-col justify-between">
                  <span class="text_93">50</span>
                  <img
                    class="image_23"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngf9c755769f6e15cbb814b809c09bf648e733b56d1bd9c095698bdf2584e96008.png"
                  />
                </div>
                <div class="group_13 flex-col justify-between">
                  <span class="text_94">90</span>
                  <img
                    class="image_24"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngdafcd76782457ad909a0cd9096c2fcc85b60032e686cd65fe0f5fb4d131cba6b.png"
                  />
                </div>
                <div class="group_14 flex-col justify-between">
                  <span class="text_95">50</span>
                  <img
                    class="image_25"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngf9c755769f6e15cbb814b809c09bf648e733b56d1bd9c095698bdf2584e96008.png"
                  />
                </div>
                <div class="group_15 flex-col justify-between">
                  <span class="text_96">60</span>
                  <img
                    class="image_26"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng8c2136f800a0b5dc63acacaea58a22475ee0e39d38e185aa8a10e948146cf44b.png"
                  />
                </div>
                <div class="group_16 flex-col justify-between">
                  <span class="text_97">90</span>
                  <img
                    class="image_27"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngdafcd76782457ad909a0cd9096c2fcc85b60032e686cd65fe0f5fb4d131cba6b.png"
                  />
                </div>
                <div class="group_17 flex-col justify-between">
                  <span class="text_98">80</span>
                  <img
                    class="image_28"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngd7cf42baa75985910df217406473ff7caf7d4e674790f048937e7e74ea409423.png"
                  />
                </div>
                <div class="group_18 flex-col justify-between">
                  <span class="text_99">50</span>
                  <img
                    class="image_29"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngf9c755769f6e15cbb814b809c09bf648e733b56d1bd9c095698bdf2584e96008.png"
                  />
                </div>
              </div>
              <div class="text-wrapper_25 flex-row">
                <span class="text_100">6/1</span>
                <span class="text_101">6/2</span>
                <span class="text_102">6/3</span>
                <span class="text_103">6/4</span>
                <span class="text_104">6/5</span>
                <span class="text_105">6/6</span>
                <span class="text_106">6/7</span>
              </div>
              <img
                class="image_30"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng63ba6054d6e3cda6d103b66b900b356968761b2a455044e1629ced06fc9eb42a.png"
              />
            </div>
            <div class="box_13 flex-col">
              <div class="image-wrapper_15 flex-col">
                <img
                  class="image_31"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPngb445c840a8cbb87364425246303ec5a9b883841c18756354c4433dcf72385fa5.png"
                />
              </div>
              <div class="group_19 flex-row justify-between">
                <div class="image-text_2 flex-row justify-between">
                  <div class="box_14 flex-col"></div>
                  <span class="text-group_2">类型一：40%</span>
                </div>
                <div class="image-text_3 flex-row justify-between">
                  <div class="section_11 flex-col"></div>
                  <span class="text-group_3">类型二：30%</span>
                </div>
              </div>
              <div class="group_20 flex-row justify-between">
                <div class="image-text_4 flex-row justify-between">
                  <div class="block_8 flex-col"></div>
                  <span class="text-group_4">类型三：20%</span>
                </div>
                <div class="image-text_5 flex-row justify-between">
                  <div class="section_12 flex-col"></div>
                  <span class="text-group_5">类型四：10%</span>
                </div>
              </div>
              <img
                class="image_32"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng9778f92ff5597afd7fcbd2dfa89030b8d5909ae3645f8bc7b563573d94375200.png"
              />
            </div>
          </div>
          <div class="text-wrapper_26 flex-col">
            <img class="text_107" referrerpolicy="no-referrer" src="./assets/img/gph.png" />
          </div>
          <div class="text-wrapper_27 flex-col">
            <img class="text_108" referrerpolicy="no-referrer" src="./assets/img/buliangquexianzhanbi.png" />
          </div>
          <img
            class="image_33"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng39ecde2147390c62dae6e65fad7d8d5dddb1256ab7719b51e46cba39f5198052.png"
          />
        </div>
        <div class="group_21 flex-row">
          <div class="text-wrapper_28 flex-col justify-center">
            <img
              class="text_109"
              referrerpolicy="no-referrer"
              src="./assets/img/chanxianshujukanban.png"
            />
          </div>
          <div class="group_22 flex-col justify-between">
            <span class="text_110">2026-06-26&nbsp;09:20:30</span>
            <div class="image-wrapper_17 flex-col">
              <img
                class="image_34"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng9dac567b8c958167f47587fa77e6eb95ee2b16bb4e7645419dffb7b38d6eba57.png"
              />
            </div>
          </div>
          <div class="image-wrapper_16 flex-col align-center">
            <img
              class="image_35"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng23afe756a718a100a7df5994f3ff3e053d228fbc3cd08ab7c996677b6ed9954c.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import xuanzhongBg from './assets/img/xuanzhong.png'
import weixuanBg from './assets/img/weixuan.png'

const productionLines = [
  { id: 1, label: '产线1' },
  { id: 2, label: '产线2' },
  { id: 3, label: '产线3' },
  { id: 4, label: '产线4' },
  { id: 5, label: '产线5' },
  { id: 6, label: '产线6' },
]

const activeLine = ref(1)
</script>
<style scoped lang="css" src="./assets/index.css" />
