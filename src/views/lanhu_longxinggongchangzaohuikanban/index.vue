<template>
  <div class="page flex-col">
    <div class="box_1 flex-col">
      <div class="section_1 flex-col">
        <div class="block_1 flex-col">
          <div class="group_1 flex-col">
            <div class="box_2 flex-row">
              <div
                v-for="(kpi, i) in kpiList"
                :key="i"
                class="kpi-card flex-col"
                :class="{ 'kpi-card--clickable': kpi.label === '制造周期' }"
                :style="{
                  backgroundImage: `url(${kpi.bg})`,
                  marginLeft: kpi.gap ? `${kpi.gap}vw` : '',
                }"
                @click="onKpiClick(kpi)"
              >
                <span class="kpi-card__label">{{ kpi.label }}</span>
                <span class="kpi-card__value" :class="{ 'kpi-card__value--warn': kpi.warn }">{{
                  kpi.value
                }}</span>
              </div>
            </div>
            <div class="box_3 flex-row justify-between">
              <div class="group_2 flex-col">
                <div class="text-wrapper_6 flex-row">
                  <img
                    class="text_11"
                    referrerpolicy="no-referrer"
                    src="./assets/img/baibanjphdacheng.png"
                  />
                </div>
                <div class="section_2 flex-row">
                  <div class="box_4 flex-col"></div>
                  <span class="text_12">昨日</span>
                  <div class="box_5 flex-col"></div>
                  <span class="text_13">周累</span>
                  <div class="box_6 flex-col"></div>
                  <span class="text_14">月均</span>
                </div>
                <div class="section_3 flex-row justify-between">
                  <div class="text-wrapper_7 flex-col">
                    <span class="text_15">100</span>
                    <span class="text_16">75</span>
                    <span class="text_17">50</span>
                    <span class="text_18">25</span>
                    <span class="text_19">0</span>
                  </div>
                  <div class="box_7 flex-col">
                    <div class="text-wrapper_8 flex-row">
                      <span class="text_20">目标：90</span>
                      <span class="text_21">92</span>
                      <span class="text_22">92</span>
                      <span class="text_23">92</span>
                      <span class="text_24">92</span>
                    </div>
                    <div class="section_4 flex-col justify-end">
                      <img
                        class="image_1"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPngb3f6bbb587b0131cd469b42038ee6d85a3e7976be494da2e9772d188d73e20e9.png"
                      />
                      <div class="box_8 flex-row">
                        <div class="block_2 flex-col justify-between">
                          <span class="text_25">60</span>
                          <div class="block_3 flex-row justify-between">
                            <img
                              class="image_2"
                              referrerpolicy="no-referrer"
                              src="./assets/img/SketchPngfed1181cdd6cabc556fa98e2fe3fb30facd8b128e55d8a2d178de2f0873c0a2d.png"
                            />
                            <div class="image-wrapper_1 flex-col">
                              <img
                                class="thumbnail_1"
                                referrerpolicy="no-referrer"
                                src="./assets/img/SketchPngc7ea341b963bfae3bc666be0dc17d98758a4cf1353aebea843a8e8699586cf23.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="block_4 flex-col justify-between">
                          <span class="text_26">60</span>
                          <div class="group_3 flex-row justify-between">
                            <img
                              class="image_3"
                              referrerpolicy="no-referrer"
                              src="./assets/img/SketchPnge564b4e789ea346c62c2ec3129c747bbef5b5084bd53efe30ee7506594ff75e8.png"
                            />
                            <div class="image-wrapper_2 flex-col">
                              <img
                                class="thumbnail_2"
                                referrerpolicy="no-referrer"
                                src="./assets/img/SketchPng177e44622c8c796f2fd3d3bae764db93b4d9d1760563768f91b6064cfade6bca.png"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          class="image_4"
                          referrerpolicy="no-referrer"
                          src="./assets/img/SketchPng071bcd29d609d0f461bd2d1d44aca4f75d3cb4596373fce75f8e644a6852828f.png"
                        />
                        <div class="image-wrapper_3 flex-col">
                          <img
                            class="thumbnail_3"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPng306701e60e33ca514a7f47abb47214ae580f365bcb1b167e050382be7c695aa6.png"
                          />
                        </div>
                        <div class="block_5 flex-col justify-between">
                          <span class="text_27">60</span>
                          <div class="group_4 flex-row justify-between">
                            <img
                              class="image_5"
                              referrerpolicy="no-referrer"
                              src="./assets/img/SketchPngfed1181cdd6cabc556fa98e2fe3fb30facd8b128e55d8a2d178de2f0873c0a2d.png"
                            />
                            <div class="image-wrapper_4 flex-col">
                              <img
                                class="thumbnail_4"
                                referrerpolicy="no-referrer"
                                src="./assets/img/SketchPngc7ea341b963bfae3bc666be0dc17d98758a4cf1353aebea843a8e8699586cf23.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="block_6 flex-col justify-between">
                          <span class="text_28">60</span>
                          <div class="group_5 flex-row justify-between">
                            <img
                              class="image_6"
                              referrerpolicy="no-referrer"
                              src="./assets/img/SketchPnge564b4e789ea346c62c2ec3129c747bbef5b5084bd53efe30ee7506594ff75e8.png"
                            />
                            <div class="image-wrapper_5 flex-col">
                              <img
                                class="thumbnail_5"
                                referrerpolicy="no-referrer"
                                src="./assets/img/SketchPng177e44622c8c796f2fd3d3bae764db93b4d9d1760563768f91b6064cfade6bca.png"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          class="image_7"
                          referrerpolicy="no-referrer"
                          src="./assets/img/SketchPng071bcd29d609d0f461bd2d1d44aca4f75d3cb4596373fce75f8e644a6852828f.png"
                        />
                        <div class="image-wrapper_6 flex-col">
                          <img
                            class="thumbnail_6"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPng306701e60e33ca514a7f47abb47214ae580f365bcb1b167e050382be7c695aa6.png"
                          />
                        </div>
                        <div class="block_7 flex-col justify-between">
                          <span class="text_29">60</span>
                          <div class="box_9 flex-row justify-between">
                            <img
                              class="image_8"
                              referrerpolicy="no-referrer"
                              src="./assets/img/SketchPngfed1181cdd6cabc556fa98e2fe3fb30facd8b128e55d8a2d178de2f0873c0a2d.png"
                            />
                            <div class="image-wrapper_7 flex-col">
                              <img
                                class="thumbnail_7"
                                referrerpolicy="no-referrer"
                                src="./assets/img/SketchPngc7ea341b963bfae3bc666be0dc17d98758a4cf1353aebea843a8e8699586cf23.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="block_8 flex-col justify-between">
                          <span class="text_30">60</span>
                          <div class="box_10 flex-row justify-between">
                            <img
                              class="image_9"
                              referrerpolicy="no-referrer"
                              src="./assets/img/SketchPnge564b4e789ea346c62c2ec3129c747bbef5b5084bd53efe30ee7506594ff75e8.png"
                            />
                            <div class="image-wrapper_8 flex-col">
                              <img
                                class="thumbnail_8"
                                referrerpolicy="no-referrer"
                                src="./assets/img/SketchPng177e44622c8c796f2fd3d3bae764db93b4d9d1760563768f91b6064cfade6bca.png"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          class="image_10"
                          referrerpolicy="no-referrer"
                          src="./assets/img/SketchPng071bcd29d609d0f461bd2d1d44aca4f75d3cb4596373fce75f8e644a6852828f.png"
                        />
                        <div class="image-wrapper_9 flex-col">
                          <img
                            class="thumbnail_9"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPng306701e60e33ca514a7f47abb47214ae580f365bcb1b167e050382be7c695aa6.png"
                          />
                        </div>
                        <div class="block_9 flex-col justify-between">
                          <span class="text_31">60</span>
                          <div class="box_11 flex-row justify-between">
                            <img
                              class="image_11"
                              referrerpolicy="no-referrer"
                              src="./assets/img/SketchPngfed1181cdd6cabc556fa98e2fe3fb30facd8b128e55d8a2d178de2f0873c0a2d.png"
                            />
                            <div class="image-wrapper_10 flex-col">
                              <img
                                class="thumbnail_10"
                                referrerpolicy="no-referrer"
                                src="./assets/img/SketchPngc7ea341b963bfae3bc666be0dc17d98758a4cf1353aebea843a8e8699586cf23.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="block_10 flex-col justify-between">
                          <span class="text_32">60</span>
                          <div class="group_6 flex-row justify-between">
                            <img
                              class="image_12"
                              referrerpolicy="no-referrer"
                              src="./assets/img/SketchPnge564b4e789ea346c62c2ec3129c747bbef5b5084bd53efe30ee7506594ff75e8.png"
                            />
                            <div class="image-wrapper_11 flex-col">
                              <img
                                class="thumbnail_11"
                                referrerpolicy="no-referrer"
                                src="./assets/img/SketchPng177e44622c8c796f2fd3d3bae764db93b4d9d1760563768f91b6064cfade6bca.png"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          class="image_13"
                          referrerpolicy="no-referrer"
                          src="./assets/img/SketchPng071bcd29d609d0f461bd2d1d44aca4f75d3cb4596373fce75f8e644a6852828f.png"
                        />
                        <div class="image-wrapper_12 flex-col">
                          <img
                            class="thumbnail_12"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPng306701e60e33ca514a7f47abb47214ae580f365bcb1b167e050382be7c695aa6.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="text-wrapper_9 flex-row justify-between">
                      <span class="text_33">焊接车间</span>
                      <span class="text_34">涂装车间</span>
                      <span class="text_35">总装车间</span>
                      <span class="text_36">电池车间</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="group_7 flex-col">
                <div class="block_11 flex-row">
                  <div class="group_8 flex-col"></div>
                  <span class="text_37">昨日</span>
                  <div class="group_9 flex-col"></div>
                  <span class="text_38">周累</span>
                  <div class="group_10 flex-col"></div>
                  <span class="text_39">月均</span>
                </div>
                <div class="block_12 flex-row justify-between">
                  <div class="text-wrapper_10 flex-col">
                    <span class="text_40">100</span>
                    <span class="text_41">75</span>
                    <span class="text_42">50</span>
                    <span class="text_43">25</span>
                    <span class="text_44">0</span>
                  </div>
                  <div class="box_12 flex-col">
                    <div class="text-wrapper_11 flex-row justify-between">
                      <span class="text_45">目标：90</span>
                      <span class="text_46">92</span>
                    </div>
                    <div class="section_5 flex-col justify-end">
                      <img
                        class="image_14"
                        referrerpolicy="no-referrer"
                        src="./assets/img/SketchPngb3f6bbb587b0131cd469b42038ee6d85a3e7976be494da2e9772d188d73e20e9.png"
                      />
                      <div class="box_13 flex-row">
                        <div class="box_14 flex-col justify-between">
                          <span class="text_47">60</span>
                          <div class="group_11 flex-row justify-between">
                            <img
                              class="image_15"
                              referrerpolicy="no-referrer"
                              src="./assets/img/SketchPngfed1181cdd6cabc556fa98e2fe3fb30facd8b128e55d8a2d178de2f0873c0a2d.png"
                            />
                            <div class="image-wrapper_13 flex-col">
                              <img
                                class="thumbnail_13"
                                referrerpolicy="no-referrer"
                                src="./assets/img/SketchPngc7ea341b963bfae3bc666be0dc17d98758a4cf1353aebea843a8e8699586cf23.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="box_15 flex-col justify-between">
                          <span class="text_48">60</span>
                          <div class="group_12 flex-row justify-between">
                            <img
                              class="image_16"
                              referrerpolicy="no-referrer"
                              src="./assets/img/SketchPnge564b4e789ea346c62c2ec3129c747bbef5b5084bd53efe30ee7506594ff75e8.png"
                            />
                            <div class="image-wrapper_14 flex-col">
                              <img
                                class="thumbnail_14"
                                referrerpolicy="no-referrer"
                                src="./assets/img/SketchPng177e44622c8c796f2fd3d3bae764db93b4d9d1760563768f91b6064cfade6bca.png"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          class="image_17"
                          referrerpolicy="no-referrer"
                          src="./assets/img/SketchPng071bcd29d609d0f461bd2d1d44aca4f75d3cb4596373fce75f8e644a6852828f.png"
                        />
                        <div class="image-wrapper_15 flex-col">
                          <img
                            class="thumbnail_15"
                            referrerpolicy="no-referrer"
                            src="./assets/img/SketchPng306701e60e33ca514a7f47abb47214ae580f365bcb1b167e050382be7c695aa6.png"
                          />
                        </div>
                      </div>
                    </div>
                    <span class="text_49">冲压车间</span>
                  </div>
                </div>
                <img
                  class="image_18"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng9778f92ff5597afd7fcbd2dfa89030b8d5909ae3645f8bc7b563573d94375200.png"
                />
              </div>
            </div>
            <div class="box_16 flex-row justify-between">
              <div class="box_17 flex-col">
                <div class="box_18 flex-row">
                  <div class="image-text_1 flex-row justify-between">
                    <img
                      class="thumbnail_16"
                      referrerpolicy="no-referrer"
                      src="./assets/img/SketchPng850377804f05d478526ea924eeba4d7981b5b9e23713da8318157ca777b42154.png"
                    />
                    <span class="text-group_1">入库率</span>
                  </div>
                </div>
                <div class="box_19 flex-row justify-between">
                  <div class="text-wrapper_12 flex-col">
                    <span class="text_50">100%</span>
                    <span class="text_51">75%</span>
                    <span class="text_52">50%</span>
                    <span class="text_53">25%</span>
                    <span class="text_54">0%</span>
                  </div>
                  <div class="section_6 flex-col">
                    <div class="box_20 flex-row">
                      <div class="box_21 flex-col">
                        <div class="text-wrapper_13 flex-row justify-between">
                          <span class="text_55">75%</span>
                          <span class="text_56">70%</span>
                        </div>
                        <div class="text-wrapper_14 flex-row"><span class="text_57">60%</span></div>
                        <div class="text-wrapper_15 flex-row"><span class="text_58">47%</span></div>
                      </div>
                      <span class="text_59">69%</span>
                      <span class="text_60">54%</span>
                    </div>
                    <span class="text_61">98%</span>
                  </div>
                </div>
                <div class="text-wrapper_16 flex-row">
                  <span class="text_62">6/1</span>
                  <span class="text_63">6/2</span>
                  <span class="text_64">6/3</span>
                  <span class="text_65">6/4</span>
                  <span class="text_66">6/5</span>
                  <span class="text_67">6/6</span>
                  <span class="text_68">6/7</span>
                </div>
                <img
                  class="image_19"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng9778f92ff5597afd7fcbd2dfa89030b8d5909ae3645f8bc7b563573d94375200.png"
                />
              </div>
              <div class="box_22 flex-row justify-between">
                <div class="image-wrapper_16 flex-col">
                  <img
                    class="image_20"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPngb89b71e31273253376eac33e045c994805a02802e8bed444fb08f4f3278ffc25.png"
                  />
                </div>
                <div class="group_13 flex-col">
                  <div class="image-text_2 flex-row justify-between">
                    <div class="section_7 flex-col"></div>
                    <span class="text-group_2">1天以内：30%</span>
                  </div>
                  <div class="image-text_3 flex-row justify-between">
                    <div class="block_13 flex-col"></div>
                    <span class="text-group_3">2天以内：20%</span>
                  </div>
                  <div class="image-text_4 flex-row justify-between">
                    <div class="section_8 flex-col"></div>
                    <span class="text-group_4">3天以内：10%</span>
                  </div>
                  <div class="image-text_5 flex-row justify-between">
                    <div class="box_23 flex-col"></div>
                    <span class="text-group_5">3天以上：10%</span>
                  </div>
                </div>
                <img
                  class="image_21"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng9778f92ff5597afd7fcbd2dfa89030b8d5909ae3645f8bc7b563573d94375200.png"
                />
              </div>
            </div>
            <div class="box_24 flex-row justify-between">
              <div class="group_14 flex-col">
                <div class="downtime-list flex-col">
                  <div v-for="(item, i) in topDowntime" :key="i" class="downtime-row flex-row">
                    <div class="downtime-row__bar"></div>
                    <span class="downtime-row__text" :title="item.desc">{{ item.desc }}</span>
                    <span class="downtime-row__time">{{ item.duration }}</span>
                  </div>
                </div>
                <img
                  class="image_22"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng9778f92ff5597afd7fcbd2dfa89030b8d5909ae3645f8bc7b563573d94375200.png"
                />
              </div>
              <div class="group_17 flex-col">
                <div class="group_18 flex-row justify-between">
                  <div class="image-text_6 flex-row justify-between">
                    <div class="block_14 flex-col"></div>
                    <span class="text-group_6">昨日</span>
                  </div>
                  <div class="image-text_7 flex-row justify-between">
                    <div class="group_19 flex-col"></div>
                    <span class="text-group_7">月均</span>
                  </div>
                </div>
                <div class="group_20 flex-row justify-between">
                  <div class="text-wrapper_17 flex-col">
                    <span class="text_79">100%</span>
                    <span class="text_80">75%</span>
                    <span class="text_81">50%</span>
                    <span class="text_82">25%</span>
                    <span class="text_83">0%</span>
                  </div>
                  <div class="block_15 flex-col">
                    <div class="group_21 flex-row">
                      <div class="text-wrapper_18 flex-col justify-between">
                        <span class="text_84">98%</span>
                        <span class="text_85">90%</span>
                      </div>
                      <span class="text_86">96%</span>
                      <span class="text_87">96%</span>
                    </div>
                    <div class="group_22 flex-row">
                      <div class="block_16 flex-col"></div>
                      <div class="block_17 flex-col"></div>
                      <div class="image-text_8 flex-row justify-between">
                        <div class="section_9 flex-col"></div>
                        <div class="section_10 flex-col justify-between">
                          <span class="text-group_8">80%</span>
                          <div class="block_18 flex-col"></div>
                        </div>
                      </div>
                      <div class="image-text_9 flex-row justify-between">
                        <div class="block_19 flex-col"></div>
                        <div class="block_20 flex-col justify-between">
                          <span class="text-group_9">78%</span>
                          <div class="block_21 flex-col"></div>
                        </div>
                      </div>
                      <div class="block_22 flex-col justify-between">
                        <span class="text_88">78%</span>
                        <div class="image-text_10 flex-row justify-between">
                          <div class="group_23 flex-col"></div>
                          <div class="group_24 flex-col justify-between">
                            <span class="text-group_10">60%</span>
                            <div class="box_33 flex-col"></div>
                          </div>
                        </div>
                      </div>
                      <div class="block_23 flex-col justify-between">
                        <span class="text_89">49%</span>
                        <div class="image-text_11 flex-row justify-between">
                          <div class="group_25 flex-col"></div>
                          <div class="group_26 flex-col justify-between">
                            <span class="text-group_11">30%</span>
                            <div class="section_11 flex-col"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-wrapper_19 flex-row">
                      <span class="text_90">焊接上线点</span>
                      <span class="text_91">焊接下线点</span>
                      <span class="text_92">涂装上线</span>
                      <span class="text_93">涂装下线</span>
                      <span class="text_94">总装上线</span>
                    </div>
                  </div>
                </div>
                <img
                  class="image_23"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng9778f92ff5597afd7fcbd2dfa89030b8d5909ae3645f8bc7b563573d94375200.png"
                />
              </div>
            </div>
            <div class="text-wrapper_20 section-title flex-col">
              <img
                class="section-title-img"
                referrerpolicy="no-referrer"
                src="./assets/img/chongyachejianbaiban.png"
              />
            </div>
            <div class="text-wrapper_21 section-title flex-col">
              <img
                class="section-title-img"
                referrerpolicy="no-referrer"
                src="./assets/img/rukuqingkuang.png"
              />
            </div>
            <div class="text-wrapper_22 section-title flex-col">
              <img
                class="section-title-img"
                referrerpolicy="no-referrer"
                src="./assets/img/jiecunche.png"
              />
            </div>
            <div class="text-wrapper_23 section-title flex-col">
              <img
                class="section-title-img"
                referrerpolicy="no-referrer"
                src="./assets/img/zuoritingxianwenti.png"
              />
            </div>
            <div class="text-wrapper_24 section-title flex-col">
              <img
                class="section-title-img"
                referrerpolicy="no-referrer"
                src="./assets/img/gechejianshunxuhualv.png"
              />
            </div>
          </div>
          <DashboardHeader :title-img="titleImg" />
        </div>
      </div>
    </div>

    <!-- 制造周期弹框 -->
    <ZhizaozhouqiDialog :visible="showZhouqiDialog" @close="showZhouqiDialog = false" />

    <!-- 千停弹框 -->
    <QiantingDialog :visible="showQiantingDialog" @close="showQiantingDialog = false" />

    <!-- 总装下线-外观下线弹框 -->
    <ZongzhuangDialog :visible="showZongzhuangDialog" @close="showZongzhuangDialog = false" />

    <!-- 产量计划完成率-数量弹框 -->
    <ChanliangShuliangDialog :visible="showChanliangShuliangDialog" @close="showChanliangShuliangDialog = false" />

    <!-- 产量计划完成率-时间弹框 -->
    <ChanliangShijianDialog :visible="showChanliangShijianDialog" @close="showChanliangShijianDialog = false" />
  </div>
</template>
<script setup lang="ts">
// Page component
import { ref } from 'vue'
import DashboardHeader from '@/components/DashboardHeader'
import ZhizaozhouqiDialog from '../lanhu_zhizaozhouqi/index.vue'
import QiantingDialog from '../lanhu_qiantingshuju/index.vue'
import ZongzhuangDialog from '../lanhu_zongzhuangxiaxianwaiguanxiaxian/index.vue'
import ChanliangShuliangDialog from '../lanhu_chanliangjihuawanchenglvshuliang/index.vue'
import ChanliangShijianDialog from '../lanhu_chanliangjihuawanchenglvshijian/index.vue'
import titleImg from './assets/img/zaohuikanbanwenzi.png'

// 各弹框显示状态
const showZhouqiDialog = ref(false)
const showQiantingDialog = ref(false)
const showZongzhuangDialog = ref(false)
const showChanliangShuliangDialog = ref(false)
const showChanliangShijianDialog = ref(false)

// 点击顶部 KPI 卡片：根据 label 弹出对应弹框
function onKpiClick(kpi: { label: string }) {
  if (kpi.label === '制造周期') {
    showZhouqiDialog.value = true
  } else if (kpi.label === '千停') {
    showQiantingDialog.value = true
  } else if (kpi.label === '总装下线-外观下线') {
    showZongzhuangDialog.value = true
  } else if (kpi.label === '产量计划完成率-数量') {
    showChanliangShuliangDialog.value = true
  } else if (kpi.label === '产量计划完成率-时间') {
    showChanliangShijianDialog.value = true
  }
}

// 顶部 KPI 条背景切图（每张卡片各一张）
import bgZhouqi from './assets/img/zhizaozhouqi.png'
import bgQianting from './assets/img/qianting.png'
import bgWaiguan from './assets/img/zongzhuangxiaxian.png'
import bgShuliang from './assets/img/chanliangjihuawanchenglv-shuliang.png'
import bgShijian from './assets/img/chanliangjihuawanchenglv-shijian.png'

// 顶部 KPI 条。gap 为与前一卡片的水平间距(vw)，首卡为 0；warn=true 用橙色高亮。
// 后续接真实接口时只需替换 value 字段。
const kpiList = [
  { label: '制造周期', value: '1,14', bg: bgZhouqi, gap: 0 },
  { label: '千停', value: '100', bg: bgQianting, gap: 1.406, warn: true },
  { label: '总装下线-外观下线', value: '92.9%', bg: bgWaiguan, gap: 1.719 },
  { label: '产量计划完成率-数量', value: '108%', bg: bgShuliang, gap: 1.562 },
  { label: '产量计划完成率-时间', value: '90%', bg: bgShijian, gap: 1.562 },
]

// 昨日停线 TOP5 问题（5分钟以上）。后续接真实接口时替换为请求返回值。
const topDowntime = [
  { desc: '焊接车间-白班-上车体MB04车型切换时,组拼夹具…', duration: '12min' },
  { desc: '焊接车间-白班-上车体MB04车型切换时,组拼夹具…', duration: '12min' },
  { desc: '焊接车间-白班-上车体MB04车型切换时,组拼夹具…', duration: '12min' },
  { desc: '焊接车间-白班-上车体MB04车型切换时,组拼夹具…', duration: '12min' },
  { desc: '焊接车间-白班-上车体MB04车型切换时,组拼夹具…', duration: '12min' },
]
</script>

<style scoped lang="css" src="./assets/index.css" />
-
